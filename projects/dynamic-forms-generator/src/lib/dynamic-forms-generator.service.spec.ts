import { TestBed } from '@angular/core/testing';

import { DynamicFormsGeneratorService } from './dynamic-forms-generator.service';

describe('DynamicFormsGeneratorService', () => {
  let service: DynamicFormsGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicFormsGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
