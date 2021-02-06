import { Injectable } from '@angular/core';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { HttpService } from 'src/app/modules/shared/services/http.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from 'src/app/modules/shared/services/form.service';
import { GET_ALL_EARNINGS } from 'src/app/constant/url';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { COMMON_MESSAGES } from 'src/app/constant/message';

@Injectable({
  providedIn: 'root'
})
export class EarningService {

  constructor(private _formService: FormService,
    private _formBuilder: FormBuilder,
    private _http: HttpService,
    private _uitilityService: UtilityService) { }

  getAllEarnings(data) {
    return this._http.get<Earnings.Data>(GET_ALL_EARNINGS, data);
  }

  createFilterObject(form: FormGroup) {
    return {
      registrationDate: {
        label: 'Payment Date',
        fromDate: form.controls.fromDate,
        toDate: form.controls.toDate
      }
    }
  }

  getFilterForm() {
    return this._formBuilder.group(
      this._formService.getFilterFormControls(['fromDate', 'toDate']))
  }

}
