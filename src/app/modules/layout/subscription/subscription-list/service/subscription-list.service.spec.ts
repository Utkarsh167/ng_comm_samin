/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SubscriptionListService } from './subscription-list.service';

describe('Service: SubscriptionList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubscriptionListService]
    });
  });

  it('should ...', inject([SubscriptionListService], (service: SubscriptionListService) => {
    expect(service).toBeTruthy();
  }));
});
