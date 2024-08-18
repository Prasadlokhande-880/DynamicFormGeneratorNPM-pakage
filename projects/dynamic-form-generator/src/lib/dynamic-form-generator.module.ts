import { NgModule } from '@angular/core';
import { DynamicFormGeneratorComponent } from './dynamic-form-generator.component';
import { DynamicFormControlComponent } from './dynamic-form-control/dynamic-form-control.component';

@NgModule({
  declarations: [DynamicFormGeneratorComponent, DynamicFormControlComponent],
  imports: [],
  exports: [DynamicFormGeneratorComponent, DynamicFormControlComponent],
})
export class DynamicFormGeneratorModule {}
