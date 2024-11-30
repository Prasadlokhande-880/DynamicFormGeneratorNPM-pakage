import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormsGeneratorComponent } from './dynamic-forms-generator.component';

describe('DynamicFormsGeneratorComponent', () => {
  let component: DynamicFormsGeneratorComponent;
  let fixture: ComponentFixture<DynamicFormsGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicFormsGeneratorComponent]
    });
    fixture = TestBed.createComponent(DynamicFormsGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
