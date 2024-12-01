import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { DynamicFormsGeneratorComponent } from "./dynamic-forms-generator.component";
import { DynamicUiComponent } from "./dynamic-ui/dynamic-ui.component";
import { InputBoolenComponent } from "./InputTypes/input-boolen/input-boolen.component";
import { InputNumberComponent } from "./InputTypes/input-number/input-number.component";
import { InputSelectComponent } from "./InputTypes/input-select/input-select.component";
import { InputStringComponent } from "./InputTypes/input-string/input-string.component";

@NgModule({
  declarations: [
    DynamicFormsGeneratorComponent,
    DynamicFormsGeneratorComponent,
    DynamicUiComponent,
    InputBoolenComponent,
    InputNumberComponent,
    InputSelectComponent,
    InputStringComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [DynamicFormsGeneratorComponent],
})
export class DynamicFormsGeneratorModule {}
