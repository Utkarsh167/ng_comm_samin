import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { Pagination } from 'src/app/models/pagination';
import { EarningService } from '../service/earning.service';

@Component({
  selector: 'app-earning-list',
  templateUrl: './earning-list.component.html',
  styleUrls: ['./earning-list.component.scss']
})
export class EarningListComponent extends Pagination implements OnInit {

  filterForm: FormGroup;
  showFilter: boolean = false;
  appliedFilterCount: number = 0;
  isFilterApplied: boolean = false;
  filterObject: any;
  totalEarningAmount: number;
  earnings = new MatTableDataSource<Earnings.EarningList>([]);
  displayedColumns: string[] = ['position', 'name', 'compname', 'addedon', 'totalamount'];

  constructor(private _earningList: EarningService) {
    super();
    this.createFilterForm();
    this.filterObject = this._earningList.createFilterObject(this.filterForm);
  }

  ngOnInit() {
    this.getEarningList();
  }

  createFilterForm() {
    this.filterForm = this._earningList.getFilterForm();
  }

  /*
   Method For getting all the earnings 
 */

  getEarningList() {
    let data = { ...this.changeDateFormat(this.filterForm.value), ...this.validPageOptions };
    this._earningList.getAllEarnings(data)
      .subscribe(
        response => {
          this.earnings.data = response.data.earningList;
          this.total = response.data.totalCount;
          this.totalEarningAmount = response.data.totalAmount;
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
    this.getEarningList();
  }

  /*
    Method For Searching
  */
  setSearch(event) {
    this.search = event;
    this.resetPages();
    this.getEarningList();
  }

  /*
    Method For Sorting
  */
  sortData(event) {
    this.sortOptions = event;
    this.resetPages();
    this.getEarningList();
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
    this.getEarningList();
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
    this.getEarningList();
    this.appliedFilterCount = b.length;
    this.isFilterApplied = true;
  }

}
