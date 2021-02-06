import { Injectable } from '@angular/core';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { HttpService } from 'src/app/modules/shared/services/http.service';
import { FormBuilder } from '@angular/forms';
import { FormService } from 'src/app/modules/shared/services/form.service';
import { ADD_NOTIFICATION, GET_ALL_ADMIN } from 'src/app/constant/url';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { COMMON_MESSAGES } from 'src/app/constant/message';
import { FileUploadService } from 'src/app/modules/shared/services/file-upload.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationAddService {

  constructor(private _formService: FormService,
    private _formBuilder: FormBuilder,
    private _http: HttpService,
    private _uitilityService: UtilityService,
    private _fileUploadService: FileUploadService) { }


  createNotificationForm() {
    return this._formBuilder.group(
      {
        "title": this._formService.getControl('name'),
        "audience": this._formService.getControl('dropdown'),
        "message": this._formService.getControl('description'),
      }
    )
  }

  uploadImage(image) {
    return this._fileUploadService.uploadFiles([image]);
  }

  showAlert(message) {
    this._uitilityService.showAlert(message);
  }

  getAllAdmin() {
    return this._http.get<any>(GET_ALL_ADMIN);
  }

  addNoti(data) {
    let apiType = 'post';
    return this._http[apiType](ADD_NOTIFICATION, data).pipe
      (
        map(
          response => {
            this._uitilityService.showAlert(COMMON_MESSAGES['ADDED']('Notification'));
            return response;
          }
        ),
        catchError(
          error => throwError(error)
        )
      )
  }


}
