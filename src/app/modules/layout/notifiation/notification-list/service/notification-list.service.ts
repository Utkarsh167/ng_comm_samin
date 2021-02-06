import { Injectable } from '@angular/core';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { HttpService } from 'src/app/modules/shared/services/http.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from 'src/app/modules/shared/services/form.service';
import { GET_ALL_NOTI, DELETE_NOTIFICATION, GET_ALL_ADMIN, RESEND_NOTIFICATION } from 'src/app/constant/url';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { COMMON_MESSAGES } from 'src/app/constant/message';

@Injectable({
  providedIn: 'root'
})
export class NotificationListService {

  constructor(private _formService: FormService,
    private _formBuilder: FormBuilder,
    private _http: HttpService,
    private _uitilityService: UtilityService) { }


  createFilterObject(form: FormGroup) {
    return {
      registrationDate: {
        label: 'Registration Date',
        fromDate: form.controls.fromDate,
        toDate: form.controls.toDate
      }
    }
  }

  getFilterForm() {
    return this._formBuilder.group(
      this._formService.getFilterFormControls(['fromDate', 'toDate']))
  }

  getAllNoti(data) {
    return this._http.get<Notifications.Data>(GET_ALL_NOTI, data);
  }

  getAllAdmin() {
    return this._http.get<any>(GET_ALL_ADMIN);
  }

  resendNoti(data) {
    return this._http.post<any>(RESEND_NOTIFICATION, data);
  }

  showAlert(message) {
    this._uitilityService.showAlert(message);
  }

  async changeStatus(body) {
    try {
      let status = body.status.toUpperCase();
      let data = {
        message: COMMON_MESSAGES[status].confirm('Notification')
      }
      let success = await this._uitilityService.openDialog(data).toPromise();
      if (success) {
        let response = this._http.delete(DELETE_NOTIFICATION + '/' + body.userId).toPromise()
        await response;
        this._uitilityService.showAlert(COMMON_MESSAGES[status].success('Notification'))
        return Promise.resolve(response);
      } else {
        return Promise.resolve(null);
      }

    } catch (err) {
      return Promise.reject(err);
    }
  }

}
