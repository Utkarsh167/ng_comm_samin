/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CompanyDetailService } from './company-detail.service';

describe('Service: CompanyDetail', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyDetailService]
    });
  });

  it('should ...', inject([CompanyDetailService], (service: CompanyDetailService) => {
    expect(service).toBeTruthy();
  }));
});
