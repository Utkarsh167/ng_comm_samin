import { Injectable } from '@angular/core';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { HttpService } from 'src/app/modules/shared/services/http.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from 'src/app/modules/shared/services/form.service';
import { GET_ALL_COMPANYS, BLOCK_COMPANY, GET_ALL_COMPANYS_TYPE } from 'src/app/constant/url';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { COMMON_MESSAGES } from 'src/app/constant/message';

@Injectable({
  providedIn: 'root'
})
export class CompanyListService {

  constructor(private _formService: FormService,
    private _formBuilder: FormBuilder,
    private _http: HttpService,
    private _uitilityService: UtilityService) { }

  getAllCompanys(data) {
    return this._http.get<Company.Data>(GET_ALL_COMPANYS, data);
  }

  getCmpnyType() {
    return this._http.get<any>(GET_ALL_COMPANYS_TYPE);
  }

  createFilterObject(form: FormGroup) {
    return {
      registrationDate: {
        label: 'Registration Date',
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
      this._formService.getFilterFormControls(['fromDate', 'toDate', 'status', 'companyType']))
  }

  async changeStatus(body) {
    try {
      let status = body.status.toUpperCase();
      let data = {
        message: COMMON_MESSAGES[status].confirm('Company')
      }
      let success = await this._uitilityService.openDialog(data).toPromise();
      if (success) {
        let response;
        await this._http.post(BLOCK_COMPANY + "/" + body.companyId, { status: body.status }).toPromise();
        response;
        this._uitilityService.showAlert(COMMON_MESSAGES[status].success('Company'))
        return Promise.resolve(response);
      } else {
        return Promise.reject();
      }

    } catch (err) {
      return Promise.reject(err);
    }
  }
}
