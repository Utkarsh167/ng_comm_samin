import { TestBed } from '@angular/core/testing';

import { SubscriptionDetailService } from './subscription-detail.service';

describe('SubscriptionDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubscriptionDetailService = TestBed.get(SubscriptionDetailService);
    expect(service).toBeTruthy();
  });
});
