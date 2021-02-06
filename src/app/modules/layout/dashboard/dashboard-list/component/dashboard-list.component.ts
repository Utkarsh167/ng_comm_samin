import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { Pagination } from 'src/app/models/pagination';
import { DashboardService } from '../service/dashboard.service';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss']
})
export class DashboardListComponent extends Pagination implements OnInit {

  filterForm: FormGroup;
  showFilter: boolean = false;
  appliedFilterCount: number = 0;
  isFilterApplied: boolean = false;
  filterObject: any;
  dashBoardCount: any;
  todayDate: any;
  companys = new MatTableDataSource<Dashboard.CompanyList>([]);
  displayedColumns: string[] = ['position', 'title', 'name', 'email', 'senton', 'gracePeriod', 'validity', 'expiry', 'status', 'action'];
  constructor(public dialog: MatDialog,
    private _dashboard: DashboardService) {
    super();
    this.createFilterForm();
    this.filterObject = this._dashboard.createFilterObject(this.filterForm);
  }

  ngOnInit() {
    this.getAllDashBoardData();
    this.todayDate = Math.round(new Date().getTime() / 1000);
  }

  createFilterForm() {
    this.filterForm = this._dashboard.getFilterForm();
  }

  /*
    Method For getting all the subscriptions 
  */

  getAllDashBoardData() {
    let data = { ...this.changeDateFormat(this.filterForm.value), ...this.validPageOptions };
    this._dashboard.getAllData(data)
      .subscribe(
        response => {
          this.companys.data = response.data.companyList;
          this.total = response.data.totalCount;
          this.dashBoardCount = response.data
        }
      )
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
    this.getAllDashBoardData();
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
    this.getAllDashBoardData();
    this.appliedFilterCount = b.length;
    this.isFilterApplied = true;
  }

  /*
    Method For renewal the plan for a company 
  */

  renewalPlan(id) {
    this._dashboard.planRenewal({ companyId: id })
      .subscribe(
        response => {
          if (response) {
            this.getAllDashBoardData();
          }
        }
      )
  }
}


