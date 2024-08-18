import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFormGeneratorModule } from 'projects/dynamic-form-generator/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DynamicFormGeneratorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
