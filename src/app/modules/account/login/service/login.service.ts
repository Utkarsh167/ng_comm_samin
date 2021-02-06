import { Injectable } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { HttpService } from "../../../shared/services/http.service";
import { UtilityService } from "../../../shared/services/utility.service";
import { Router } from "@angular/router";
import { throwError } from "rxjs";
import { FormService } from "../../../shared/services/form.service";
import { LOGIN } from "src/app/constant/url";
import { map, catchError } from "rxjs/operators";
// import { DataTransferService } from '../../../shared/services/data-transfer.service';
import { ADMIN, COMPANY } from "../../../../constant/routes";

@Injectable()
export class LoginService {
  constructor(
    private _formBuilder: FormBuilder,
    private _http: HttpService,
    private _utilityService: UtilityService,
    private _router: Router,
    private _formService: FormService // private _dataTransferService: DataTransferService
  ) {}

  /* 
        Method For Creating Login Form
    */
  createLoginForm() {
    return this._formBuilder.group({
      email: this._formService.getControl("email"),
      password: this._formService.getControl("password")
    });
  }

  /*  
        Method For Calling Login API
    */
  login(data) {
    data = this._utilityService.trim(data);
    return this._http.post(LOGIN, data).pipe(
      map(response => {
        this.loginSuccess(response.data);
        return response;
      }),
      catchError(err => throwError(err))
    );
  }
  /*  
        Method For Login
    */
  loginSuccess(data) {
    localStorage.setItem("fleet-super-admin-token", data["accessToken"]);
    localStorage.setItem("fleet-super-admin-id", data.adminObject["id"]);
    // this._dataTransferService.profileData = data.adminObject;
    this._router.navigate(["/admin/company"]);
  }
}
