import { Injectable } from '@angular/core';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { HttpService } from 'src/app/modules/shared/services/http.service';
import { FormService } from 'src/app/modules/shared/services/form.service';
import { GET_COMPANY_DETAILS, BLOCK_COMPANY } from 'src/app/constant/url';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { COMMON_MESSAGES } from 'src/app/constant/message';

@Injectable({
  providedIn: 'root'
})
export class CompanyDetailService {

  constructor(private _formService: FormService,
    private _http: HttpService,
    private _uitilityService: UtilityService) { }

  getCompanyDetails(companyId) {
    return this._http.get<any>(GET_COMPANY_DETAILS, companyId);
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
