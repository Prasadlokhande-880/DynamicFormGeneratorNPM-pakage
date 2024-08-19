import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'lib-dynamic-form-control',
  templateUrl: './dynamic-form-control.component.html',
  styleUrls: ['./dynamic-form-control.component.css'],
})
export class DynamicFormControlComponent {
  @Input() formJson!: any;
  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({});
    this.buildForm(this.formJson.controls, this.userForm);
  }

  onSubmit() {
    console.log(this.userForm.value);
  }

  buildForm(controls: any[], formGroup: FormGroup): void {
    controls.forEach((control) => {
      if (control.type === 'group') {
        const subgroup = this.fb.group({});
        this.buildForm(control.controls, subgroup);
        formGroup.addControl(control.name, subgroup);
      } else if (control.type === 'list') {
        const formArray = this.fb.array([]);
        formGroup.addControl(control.name, formArray);
      } else {
        const formControl = new FormControl(control.value);
        formGroup.addControl(control.name, formControl);
      }
    });
  }

  // this is the function to display thevalue

  functionSave(): void {
    console.log('this is the save value', this.userForm.value);
  }
}
