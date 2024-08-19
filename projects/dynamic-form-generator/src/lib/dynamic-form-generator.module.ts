import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Components
import { DynamicFormGeneratorComponent } from './dynamic-form-generator.component';
import { DynamicFormControlComponent } from './dynamic-form-control/dynamic-form-control.component';
import { DynamicUiComponent } from './dynamic-ui/dynamic-ui.component';
import { InputBoolenComponent } from './Inputs/input-boolen/input-boolen.component';
import { InputNumberComponent } from './Inputs/input-number/input-number.component';
import { InputSelectComponent } from './Inputs/input-select/input-select.component';
import { InputStringComponent } from './Inputs/input-string/input-string.component';

@NgModule({
  declarations: [
    DynamicFormGeneratorComponent,
    DynamicFormControlComponent,
    DynamicUiComponent,
    InputBoolenComponent,
    InputNumberComponent,
    InputSelectComponent,
    InputStringComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
  ],
  exports: [
    DynamicFormGeneratorComponent,
    DynamicFormControlComponent,
  ],
})
export class DynamicFormGeneratorModule {}
