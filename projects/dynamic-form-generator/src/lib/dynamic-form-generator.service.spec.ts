import { TestBed } from '@angular/core/testing';

import { DynamicFormGeneratorService } from './dynamic-form-generator.service';

describe('DynamicFormGeneratorService', () => {
  let service: DynamicFormGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicFormGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
