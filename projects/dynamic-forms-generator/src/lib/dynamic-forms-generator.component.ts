import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'dynamic-forms-generator',
  templateUrl: './dynamic-forms-generator.component.html',
  styles: []
})
export class DynamicFormsGeneratorComponent {
  @Input() formJson: any;
  @Input() submitFunction!: (formData: any) => void;

  // Style configuration inputs
  @Input() minWidth: string = '300px';
  @Input() minHeight: string = '200px';
  @Input() border: boolean = false;
  @Input() borderRadius: string = '5px';
  @Input() borderSize: string = '1px';
  @Input() borderColor: string = '#ccc';
  @Input() padding: string = '16px';
  @Input() margin: string = '16px';

  // New inputs for additional customization
  @Input() submitButtonLabel: string = 'Save';
  @Input() cancelButtonLabel: string = 'Cancel';
  @Input() fieldVisibility: { [key: string]: boolean } = {}; // To control visibility of fields

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
      if (this.fieldVisibility[control.name] === false) {
        return; // Skip if the field is not visible
      }

      const validators = [];
      if (control.required) {
        validators.push(Validators.required);
      }
      if (control.minLength) {
        validators.push(Validators.minLength(control.minLength));
      }
      if (control.maxLength) {
        validators.push(Validators.maxLength(control.maxLength));
      }
      if (control.pattern) {
        validators.push(Validators.pattern(control.pattern));
      }

      if (control.type === 'group') {
        const subgroup = this.fb.group({});
        this.buildForm(control.controls, subgroup);
        formGroup.addControl(control.name, subgroup);
      } else if (control.type === 'list') {
        const formArray = this.fb.array([]);
        formGroup.addControl(control.name, formArray);
      } else {
        const formControl = new FormControl(control.value, validators);
        formGroup.addControl(control.name, formControl);
      }
    });
  }
}
