/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CompanyAddService } from './company-add.service';

describe('Service: CompanyAdd', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyAddService]
    });
  });

  it('should ...', inject([CompanyAddService], (service: CompanyAddService) => {
    expect(service).toBeTruthy();
  }));
});
