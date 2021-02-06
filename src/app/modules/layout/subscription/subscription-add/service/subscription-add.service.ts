import { Injectable } from '@angular/core';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { HttpService } from 'src/app/modules/shared/services/http.service';
import { FormBuilder } from '@angular/forms';
import { FormService } from 'src/app/modules/shared/services/form.service';
import { ADD_SUBSCRIPTION, GET_SUBSCRIPTION_DETAILS, CHECK_UNIQUE_SUBSCRIPTION } from 'src/app/constant/url';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { COMMON_MESSAGES } from 'src/app/constant/message';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionAddService {

  constructor(private _formService: FormService,
    private _formBuilder: FormBuilder,
    private _http: HttpService,
    private _uitilityService: UtilityService) { }


  createSubscriptionForm() {
    return this._formBuilder.group(
      {
        "name": this._formService.getControl('name'),
        "price": this._formService.getControl('price'),
        "gracePeriod": this._formService.getControl('gracePeriod'),
        "description": this._formService.getControl('description'),
        "month": this._formService.getControl('dropdown'),
        "year": this._formService.getControl('year'),
      }
    )
  }

  addSubscription(data) {
    let apiType = data.subscriptionId ? 'put' : 'post';
    return this._http[apiType](ADD_SUBSCRIPTION, data).pipe
      (
        map(
          response => {
            this._uitilityService.showAlert(COMMON_MESSAGES[data.subscriptionId ? 'UPDATED' : 'ADDED']('Subsciption'));
            return response;
          }
        ),
        catchError(
          error => throwError(error)
        )
      )
  }

  getSubscriptionDetails(subId) {
    return this._http.get<any>(GET_SUBSCRIPTION_DETAILS, subId);
  }

  checkSubNameUnique(data: object) {
    return this._http.get<any>(CHECK_UNIQUE_SUBSCRIPTION, data, false);
  }

}
