import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { SubscriptionListService } from '../service/subscription-list.service';
import { Pagination } from 'src/app/models/pagination';


@Component({
  selector: 'app-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.scss']
})
export class SubscriptionListComponent extends Pagination implements OnInit {

  filterForm: FormGroup;
  showFilter: boolean = false;
  appliedFilterCount: number = 0;
  isFilterApplied: boolean = false;
  filterObject: any;
  subscriptions = new MatTableDataSource<Subscription.SubscriptionList>([]);
  displayedColumns: string[] = ['position', 'name', 'price', 'grace', 'subscribe', 'addedon', 'status', 'action'];

  constructor(private _subList: SubscriptionListService,
  ) {
    super();
    this.createFilterForm();
    this.filterObject = this._subList.createFilterObject(this.filterForm);
  }

  ngOnInit() {
    this.getAllSubcriptions();
  }

  createFilterForm() {
    this.filterForm = this._subList.getFilterForm();
  }

  /*
    Method For getting all the subscriptions 
  */

  getAllSubcriptions() {
    let data = { ...this.changeDateFormat(this.filterForm.value), ...this.validPageOptions,type:'all' };
    this._subList.getAllSubcriptions(data)
      .subscribe(
        response => {
          this.subscriptions.data = response.data.subscriptionList;
          this.total = response.data.totalCount;
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
    this.getAllSubcriptions();
  }

  /*
    Method For Sorting
  */
  sortData(event) {
    this.sortOptions = event;
    this.resetPages();
    this.getAllSubcriptions();
  }

  /*
    Method For Searching
  */
  setSearch(event) {
    this.search = event;
    this.resetPages();
    this.getAllSubcriptions();
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
    this.getAllSubcriptions();
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
    this.getAllSubcriptions();
    this.appliedFilterCount = b.length;
    this.isFilterApplied = true;
  }

  async changeStatus(status, subId) {
    try {
      await this._subList.changeStatus({ status, subId });
      this.getAllSubcriptions();
    } catch (err) {
    }
  }

}
