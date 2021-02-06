import { TestBed } from '@angular/core/testing';

import { EarningDetailService } from './earning-detail.service';

describe('EarningDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EarningDetailService = TestBed.get(EarningDetailService);
    expect(service).toBeTruthy();
  });
});
