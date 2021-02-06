import { Injectable } from '@angular/core';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { HttpService } from 'src/app/modules/shared/services/http.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from 'src/app/modules/shared/services/form.service';
import { DASHBOARD_DATA, PLAN_RENEWAL } from 'src/app/constant/url';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { COMMON_MESSAGES } from 'src/app/constant/message';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _formService: FormService,
    private _formBuilder: FormBuilder,
    private _http: HttpService,
    private _uitilityService: UtilityService) { }

  getAllData(data) {
    return this._http.get<Dashboard.Data>(DASHBOARD_DATA, data);
  }

  createFilterObject(form: FormGroup) {
    return {
      registrationDate: {
        label: 'Registration Date',
        fromDate: form.controls.fromDate,
        toDate: form.controls.toDate
      },
    }
  }

  getFilterForm() {
    return this._formBuilder.group(
      this._formService.getFilterFormControls(['fromDate', 'toDate']))
  }

  planRenewal(data) {
    let apiType = 'put';
    return this._http[apiType](PLAN_RENEWAL, data).pipe
      (
        map(
          response => {
            this._uitilityService.showAlert(COMMON_MESSAGES['RENEWE']('Subcription'));
            return response;
          }
        ),
        catchError(
          error => throwError(error)
        )
      )
  }

}
