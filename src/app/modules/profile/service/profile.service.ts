import { Injectable } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { HttpService } from "../../shared/services/http.service";
import { UtilityService } from "../../shared/services/utility.service";
import { FormService } from "../../shared/services/form.service";
import { Router } from "@angular/router";
import { PROFILEDETAILS, SUPERADMIN } from "src/app/constant/url";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable()
export class ProfileService {
  userId: string;
  constructor(
    private _formBuilder: FormBuilder,
    private _http: HttpService,
    private _utilityService: UtilityService,
    // private _dataService: DataTransferService,
    private _formService: FormService,
    private _router: Router
  ) {
    this.getAdminId();
  }

  createEditProfileForm() {
    return this._formBuilder.group({
      name: this._formService.getControl("name")
    });
  }

  getAdminId() {
    this.userId = this._utilityService.getUserId();
  }

  getProfileDetails() {
    return this._http.get(PROFILEDETAILS, { userId: this.userId });
  }

  editProfile(data) {
    let body = { ...data };
    //   delete body['email'];
    return this._http.put(SUPERADMIN, body).pipe(
      map(response => {
        // if (response['statusCode'] === 200) {
        //   this._utilityService.showAlert(COMMON_MESSAGES.UPDATED('Profile'));
        //   this._dataService.profileData.data = { ...this._dataService.profileData.data, ...body }
        //   this._dataService.profileDetail.next({ ...this._dataService.profileData });
        //   this._router.navigate([SETTINGS]);
        // }
      }),
      catchError(error => {
        this._utilityService.errorAlert(error);
        return throwError(error);
      })
    );
  }
}
