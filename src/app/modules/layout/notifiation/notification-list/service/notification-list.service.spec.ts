/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NotificationListService } from './notification-list.service';

describe('Service: NotificationList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationListService]
    });
  });

  it('should ...', inject([NotificationListService], (service: NotificationListService) => {
    expect(service).toBeTruthy();
  }));
});
