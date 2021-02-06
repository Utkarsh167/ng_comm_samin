import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NotificationAddService } from '../service/notification-add.service';
import { onSelectFile } from 'src/app/constant/file-input';
import { invalidFileError, invalidFileSize, ADD_NOTIFICATION_MESSAGES as messages } from 'src/app/constant/message';
import { NOTIFICATION } from 'src/app/constant/absolute-routes';
import { Router } from '@angular/router';


@Component({
  selector: 'app-notification-add',
  templateUrl: './notification-add.component.html',
  styleUrls: ['./notification-add.component.scss']
})
export class NotificationAddComponent implements OnInit {
  imgTooltip: 'No file chosen';
  notificationForm: FormGroup;
  notificationImageFile: any;
  notificationImage: string;
  allAdminData: any[] = [];

  constructor(private _notiAdd: NotificationAddService,
    private _router: Router) {
    this.createForm();
  }

  ngOnInit() {
    this.getAllAdmin();
  }


  /********* Create Notification form ***********/
  createForm() {
    this.notificationForm = this._notiAdd.createNotificationForm();
  }
  /***********  END   ************/

  /*
    Method For getting all the admin's 
  */

  getAllAdmin() {
    this._notiAdd.getAllAdmin()
      .subscribe(
        response => {
          this.allAdminData = response.data;
        }, err => {
        }
      )
  }

  /***********  Get all controls   ************/
  getControl(control) {
    return this.notificationForm.controls[control];
  }
  /***********  END   ************/

  async uploadImage() {
    try {
      return await this._notiAdd.uploadImage(this.notificationImageFile);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  /**
   * @description This function is called when user change profile pic. Save that file
   * @param event 
   */
  async onSelectFile(event) {
    try {
      let result = await onSelectFile(event);
      this.imgTooltip = result.name;
      this.notificationImage = result.url;
      this.notificationImageFile = result.file;
      
    } catch (err) {
      if (err.type) {
        this._notiAdd.showAlert(invalidFileError());
      } else if (err.size) {
        this._notiAdd.showAlert(invalidFileSize())
      }
    }
  }

  async submitForm() {
    if (this.notificationForm.invalid || this.notificationForm.disabled) {
      return;
    }
    // if (!this.notificationImageFile && !this.notificationImage) {
    //   this._notiAdd.showAlert(messages.notificationImage);
    //   return;
    // }
    const data = { ...this.notificationForm.value };
    this.notificationForm.disable();
    const files = await this.uploadImage();
    data['image'] = files[0] ? files[0].Location : this.notificationImage;
    this.addNotification(data);
  }

  addNotification(data) {
    this._notiAdd.addNoti(data).subscribe(
      response => {
        if (response && response.statusCode == 200) {
          this._router.navigate([NOTIFICATION])
        }
      },
      err => {
        this.notificationForm.enable();
      }
    )
  }


}
