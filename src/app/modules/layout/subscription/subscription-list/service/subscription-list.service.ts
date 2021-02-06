import { Injectable } from '@angular/core';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { HttpService } from 'src/app/modules/shared/services/http.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from 'src/app/modules/shared/services/form.service';
import { GET_ALL_SUBSCRIPTION, BLOCK_SUBSCRIPTION } from 'src/app/constant/url';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { COMMON_MESSAGES } from 'src/app/constant/message';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionListService {

  constructor(private _formService: FormService,
    private _formBuilder: FormBuilder,
    private _http: HttpService,
    private _uitilityService: UtilityService) { }

  createFilterObject(form: FormGroup) {
    return {
      registrationDate: {
        label: 'Added On',
        fromDate: form.controls.fromDate,
        toDate: form.controls.toDate
      },
      status: {
        label: 'Status',
        list: [
          { viewValue: 'Active', value: 'unblocked' },
          { viewValue: 'Blocked', value: 'blocked' }
        ],
        control: form.controls.status
      },
    }
  }

  getFilterForm() {
    return this._formBuilder.group(
      this._formService.getFilterFormControls(['fromDate', 'toDate', 'status', 'type']))
  }

  getAllSubcriptions(data) {
    return this._http.get<Subscription.Data>(GET_ALL_SUBSCRIPTION, data);
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
