import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource, MatPaginator, MatDialogConfig } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { Pagination } from 'src/app/models/pagination';
import { NotificationListService } from '../service/notification-list.service';
import { SendNotificationComponent } from 'src/app/modules/shared/components/send-notification/send-notification.component';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent extends Pagination implements OnInit {
  filterForm: FormGroup;
  showFilter: boolean = false;
  appliedFilterCount: number = 0;
  isFilterApplied: boolean = false;
  filterObject: any;
  notifications = new MatTableDataSource<Notifications.NotificationList>([]);
  displayedColumns: string[] = ['position', 'title', 'pushmessage', 'sentto', 'senton', 'lastseen', 'action'];

  constructor(public dialog: MatDialog,
    private _notiList: NotificationListService) {
    super();
    this.createFilterForm();
    this.filterObject = this._notiList.createFilterObject(this.filterForm);
  }

  ngOnInit() {
    this.getAllNotifications();
  }

  createFilterForm() {
    this.filterForm = this._notiList.getFilterForm();
  }

  /*
    Method For getting all the notification 
  */

  getAllNotifications() {
    let data = { ...this.changeDateFormat(this.filterForm.value), ...this.validPageOptions };
    this._notiList.getAllNoti(data)
      .subscribe(
        response => {
          this.notifications.data = response.data.notificationList;
          this.total = response.data.totalRecord;
        }, err => {
        }
      )
  }

  /*
    Method For Changing The Pagination
  */
  changePage(event: MatPaginator) {
    this.pageOptionsOnChange = event;
    if (this.total == 0) {
      return;
    }
    this.getAllNotifications();
  }

  /*
    Method For Sorting
  */
  sortData(event) {
    this.sortOptions = event;
    this.resetPages();
    this.getAllNotifications();
  }

  /*
    Method For Searching
  */
  setSearch(event) {
    this.search = event;
    this.resetPages();
    this.getAllNotifications();
  }

  /*
    Method For Checking Filter Button Shoud Be Enable Or Not
  */
  disable() {
    return !this.filterForm.dirty;
  }

  /*
      Method For Resetting The Filters
    */
  resetFilter() {
    this.filterForm.reset();
    this.resetPages();
    this.getAllNotifications();
    this.appliedFilterCount = 0;
    this.isFilterApplied = false;
  }

  /*
    Method For Applying The Filters
  */
  filter() {
    let a = Object.values(this.filterForm.value);
    let b = a.filter(Boolean);
    this.resetPages();
    this.getAllNotifications();
    this.appliedFilterCount = b.length;
    this.isFilterApplied = true;
  }

  async changeStatus(status, userId) {
    try {
      let data = await this._notiList.changeStatus({ status, userId });
      if (data) {
        this.getAllNotifications();
      }
    } catch (err) {
    }
  }


  opennotify(notiId): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '450px';
    dialogConfig.data = notiId;
    const dialogRef = this.dialog.open(SendNotificationComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.resendNotification(notiId, result)
      }
    });
  }

  /*
   Method For resend the notification 
 */

  resendNotification(id, user) {
    let obj = {
      notificationId: id,
      audience: user
    }

    this._notiList.resendNoti(obj).subscribe(response => {
      if (response && response.statusCode == 200) {
        this._notiList.showAlert("Notification sent successfully");
        this.getAllNotifications();
      }
    })
  }
}
