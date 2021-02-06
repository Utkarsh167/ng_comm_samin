import { Component, OnInit, Inject } from '@angular/core';
import { NotificationListService } from 'src/app/modules/layout/notifiation/notification-list/service/notification-list.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-send-notification',
  templateUrl: './send-notification.component.html',
  styleUrls: ['./send-notification.component.scss']
})
export class SendNotificationComponent implements OnInit {

  allAdminData: any[] = [];
  selectedUser: string;
  constructor(private _notiList: NotificationListService,
    private dialogRef: MatDialogRef<SendNotificationComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.getAllAdmin();
  }

  /*
   Method For getting all the admin's 
 */

  getAllAdmin() {
    this._notiList.getAllAdmin()
      .subscribe(
        response => {
          this.allAdminData = response.data;
        }, err => {
        }
      )
  }

  /*
   Method For close the model 
 */

  public closeDialog(data) {
    this.dialogRef.close(data);
  }

  /*
   Method For resend the noti 
 */
  submit() {
    if (!this.selectedUser) {
      this._notiList.showAlert("Please select user");
      return;
    }
    else {
      this.dialogRef.close(this.selectedUser);
    }
  }
}
