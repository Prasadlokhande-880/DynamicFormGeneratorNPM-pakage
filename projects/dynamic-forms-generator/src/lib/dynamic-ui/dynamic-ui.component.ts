import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import { Component, Input, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "dynamic-ui",
  templateUrl: "./dynamic-ui.component.html",
  styleUrls: ["./dynamic-ui.component.css", "../../styles.css"],
  animations: [
    trigger("slideToggle", [
      state("expanded", style({ height: "*", opacity: 1 })),
      state("collapsed", style({ height: "0px", opacity: 0 })),
      transition("expanded <=> collapsed", animate("300ms ease-in-out")),
    ]),
  ],
})
export class DynamicUiComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() formControlsData: any;
  isContentVisible = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  getFormGroup(form: FormGroup, name: string): FormGroup {
    return form.get(name) as FormGroup;
  }

  getFormArray(form: FormGroup, name: string): FormArray {
    return form.get(name) as FormArray;
  }

  getFormArrayAtIndex(name: string, index: number, form: FormGroup): FormGroup {
    return this.getFormArray(form, name).at(index) as FormGroup;
  }

  removeGroup(index: number, form: FormGroup, name: string): void {
    this.getFormArray(form, name).removeAt(index);
  }

  addList(control: any, name: string, form: FormGroup): void {
    const newGroup = this.fb.group({});
    this.buildForm(control, newGroup);
    this.getFormArray(form, name).push(newGroup);
  }

  buildForm(controls: any[], formGroup: FormGroup): void {
    controls.forEach((control) => {
      if (control.type === "group") {
        const subgroup = this.fb.group({});
        this.buildForm(control.controls, subgroup);
        formGroup.addControl(control.name, subgroup);
      } else if (control.type === "list") {
        const formArray = this.fb.array([]);
        formGroup.addControl(control.name, formArray);
      } else {
        formGroup.addControl(control.name, new FormControl(control.value));
      }
    });
  }
}
