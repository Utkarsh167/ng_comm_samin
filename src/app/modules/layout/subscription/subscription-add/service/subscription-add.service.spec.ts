/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SubscriptionAddService } from './subscription-add.service';

describe('Service: SubscriptionAdd', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubscriptionAddService]
    });
  });

  it('should ...', inject([SubscriptionAddService], (service: SubscriptionAddService) => {
    expect(service).toBeTruthy();
  }));
});
