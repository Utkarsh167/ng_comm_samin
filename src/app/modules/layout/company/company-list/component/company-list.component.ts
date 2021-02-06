import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Pagination } from 'src/app/models/pagination';
import { CompanyListService } from '../service/company-list.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent extends Pagination implements OnInit {

  filterForm: FormGroup;
  showFilter = false;
  appliedFilterCount: number = 0;
  isFilterApplied: boolean = false;
  filterObject: any;
  companyTypes: any[] = [];
  displayedColumns: string[] = ['position', 'compcode', 'name', 'email', 'type', 'branchLocation', 'maxRadius', 'addedon', 'status', 'action'];
  companys = new MatTableDataSource<Company.CompanyList>([]);

  constructor(private _companyList: CompanyListService,
  ) {
    super();
    this.createFilterForm();
    this.filterObject = this._companyList.createFilterObject(this.filterForm);
  }

  ngOnInit() {
    this.getCompanys();
    this.getAllCompanyType();
  }

  createFilterForm() {
    this.filterForm = this._companyList.getFilterForm();
  }

  getCompanys() {
    let data = { ...this.changeDateFormat(this.filterForm.value), ...this.validPageOptions };
    this._companyList.getAllCompanys(data)
      .subscribe(
        response => {
          this.companys.data = response.data.companyList;
          this.total = response.data.totalCount;
        }, err => {
        }
      )
  }

  /***********  For getting all the company type   ************/
  getAllCompanyType() {
    this._companyList.getCmpnyType().subscribe(resp => {
      if (resp && resp.statusCode == 200) {
        this.companyTypes = resp.data;
      }
    })
  }
  /***********  END   ************/

  /*
    Method For Changing The Pagination
  */
  changePage(event: MatPaginator) {
    this.pageOptionsOnChange = event;
    if (this.total == 0) {
      return;
    }
    this.getCompanys();
  }

  /*
    Method For Sorting
  */
  sortData(event) {
    this.sortOptions = event;
    this.resetPages();
    this.getCompanys();
  }

  /*
    Method For Searching
  */
  setSearch(event) {
    this.search = event;
    this.resetPages();
    this.getCompanys();
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
    this.getCompanys();
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
    this.getCompanys();
    this.appliedFilterCount = b.length;
    this.isFilterApplied = true;
  }

  async changeStatus(status, companyId) {
    try {
      await this._companyList.changeStatus({ status, companyId });
      this.getCompanys();
    } catch (err) {
    }
  }
}
