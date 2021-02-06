import { TestBed } from '@angular/core/testing';

import { CompanyEditService } from './company-edit.service';

describe('CompanyEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanyEditService = TestBed.get(CompanyEditService);
    expect(service).toBeTruthy();
  });
});
