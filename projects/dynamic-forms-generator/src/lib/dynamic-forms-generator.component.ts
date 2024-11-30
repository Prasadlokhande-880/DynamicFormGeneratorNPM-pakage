import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'dynamic-forms-generator',
  templateUrl: "./dynamic-forms-generator.component.html",
  styles: []
})
export class DynamicFormsGeneratorComponent {
  @Input() formJson: any;
  @Input() submitFunction!: (formData: any) => void;

  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({});
    if (this.formJson?.controls) {
      this.buildForm(this.formJson.controls, this.userForm);
    }
  }

  onSubmit(): void {
    if (this.submitFunction) {
      this.submitFunction(this.userForm.value);
    } else {
      console.log(this.userForm.value);
    }
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
        const formControl = new FormControl(control.value);
        formGroup.addControl(control.name, formControl);
      }
    });
  }
}