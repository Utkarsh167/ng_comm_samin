import { Injectable } from '@angular/core';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { HttpService } from 'src/app/modules/shared/services/http.service';
import { FormService } from 'src/app/modules/shared/services/form.service';
import { GET_EARNING_DETAIL } from 'src/app/constant/url';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { COMMON_MESSAGES } from 'src/app/constant/message';

@Injectable({
  providedIn: 'root'
})
export class EarningDetailService {

  constructor(private _formService: FormService,
    private _http: HttpService,
    private _uitilityService: UtilityService) { }

  getDetails(subId) {
    return this._http.get<any>(GET_EARNING_DETAIL, subId);
  }
}
