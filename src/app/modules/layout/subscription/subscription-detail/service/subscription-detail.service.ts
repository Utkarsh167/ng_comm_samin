import { Injectable } from '@angular/core';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { HttpService } from 'src/app/modules/shared/services/http.service';
import { FormService } from 'src/app/modules/shared/services/form.service';
import { GET_SUBSCRIPTION_DETAILS, BLOCK_SUBSCRIPTION, GET_ALL_PLAN_SUBSCRIBERS } from 'src/app/constant/url';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { COMMON_MESSAGES } from 'src/app/constant/message';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionDetailService {


  constructor(private _formService: FormService,
    private _http: HttpService,
    private _uitilityService: UtilityService) { }

  getSubscriptionDetails(subId) {
    return this._http.get<any>(GET_SUBSCRIPTION_DETAILS, subId);
  }

  getAllCompanySubscribers(subId) {
    return this._http.get<any>(GET_ALL_PLAN_SUBSCRIBERS, subId);
  }

  async changeStatus(body) {
    try {
      let status = body.status.toUpperCase();
      let data = {
        message: COMMON_MESSAGES[status].confirm('Subscription')
      }
      let success = await this._uitilityService.openDialog(data).toPromise();
      if (success) {
        let response;
        await this._http.post(BLOCK_SUBSCRIPTION + "/" + body.subId, { status: body.status }).toPromise();
        response;
        this._uitilityService.showAlert(COMMON_MESSAGES[status].success('Subscription'))
        return Promise.resolve(response);
      } else {
        return Promise.reject();
      }

    } catch (err) {
      return Promise.reject(err);
    }
  }


}
