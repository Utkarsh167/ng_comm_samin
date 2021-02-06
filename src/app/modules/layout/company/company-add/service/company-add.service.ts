import { Injectable } from '@angular/core';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { HttpService } from 'src/app/modules/shared/services/http.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from 'src/app/modules/shared/services/form.service';
import { GET_ALL_SUBSCRIPTION, COMPANY_CODE_UNIQUE, ADD_NEW_COMPANY, GET_ALL_COMPANYS_TYPE } from 'src/app/constant/url';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { COMMON_MESSAGES } from 'src/app/constant/message';


@Injectable({
  providedIn: 'root'
})
export class CompanyAddService {

  constructor(private _formService: FormService,
    private _formBuilder: FormBuilder,
    private _http: HttpService,
    private _uitilityService: UtilityService) { }


  createCompanyForm() {
    return this._formBuilder.group(
      {
        "name": this._formService.getControl('name'),
        "email": this._formService.getControl('email'),
        "companyCode": this._formService.getControl('alphaNumeric'),
        "companyType": this._formService.getControl('dropdown'),
        "address": this._formService.getControl('address'),
        "totalEmp": this._formService.getControl('employeeCapacity'),
        "paymentType": this._formService.getControl('alphabetic'),
        "serverType": this._formService.getControl('dropdown'),
        "planeId": this._formService.getControl('address'),
        "url": this._formService.getControl('url'),
        "longitude": "",
        "latitude": "",
        "maxGroupRadius": this._formService.getControl('dropdown'),
        "contactNumber": this._formBuilder.array([this.createItem()]),
      }
    )
  }

  createItem(): FormGroup {
    return this._formBuilder.group({
      phoneNumber: this._formService.getControl('phone')
    });
  }

  getAllSubscription() {
    return this._http.get<any>(GET_ALL_SUBSCRIPTION);
  }

  getCmpnyType() {
    return this._http.get<any>(GET_ALL_COMPANYS_TYPE);
  }

  checkCompanyCodeUnique(data: object) {
    return this._http.get<any>(COMPANY_CODE_UNIQUE, data, false);
  }

  addCompany(data) {
    return this._http.post(ADD_NEW_COMPANY, data).pipe(
      map(
        response => {
          this._uitilityService.showAlert(COMMON_MESSAGES['ADDED']('Company'));
          return response;
        }
      ),
      catchError(
        error => throwError(error)
      )
    )
  }
}



