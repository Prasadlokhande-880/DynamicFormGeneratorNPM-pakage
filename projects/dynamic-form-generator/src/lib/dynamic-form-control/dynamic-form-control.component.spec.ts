import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormControlComponent } from './dynamic-form-control.component';

describe('DynamicFormControlComponent', () => {
  let component: DynamicFormControlComponent;
  let fixture: ComponentFixture<DynamicFormControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicFormControlComponent]
    });
    fixture = TestBed.createComponent(DynamicFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
