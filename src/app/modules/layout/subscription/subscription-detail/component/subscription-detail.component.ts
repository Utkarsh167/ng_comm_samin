import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { SubscriptionDetailService } from "../service/subscription-detail.service";
import { SUBSCRIPTION } from "src/app/constant/absolute-routes";
import { MatTableDataSource, MatPaginator } from "@angular/material";
import { Pagination } from "src/app/models/pagination";

@Component({
  selector: "app-subscription-detail",
  templateUrl: "./subscription-detail.component.html",
  styleUrls: ["./subscription-detail.component.scss"]
})
export class SubscriptionDetailComponent extends Pagination implements OnInit {
  subscription: any;
  subscriptionId: string;
  subscribers = new MatTableDataSource<Subscription.SubscriptionList>([]);
  displayedColumns: string[] = [
    "position",
    "compid",
    "name",
    "email",
    "addedon",
    "status"
  ];
  constructor(
    private _subDetailService: SubscriptionDetailService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    super();
  }

  ngOnInit() {
    this.subscriptionId = this._route.snapshot.params.subId;
    this.getSubscriptionDetail();
  }

  /* Method For getting subscription details
   *
   */
  getSubscriptionDetail() {
    this._subDetailService
      .getSubscriptionDetails({ subscriptionId: this.subscriptionId })
      .subscribe(
        response => {
          if (!response.data) {
            this._router.navigate([SUBSCRIPTION]);
          }
          this.subscription = response.data;
          this.getAllPlanSubscribers();
        },
        err => {
          this._router.navigate([SUBSCRIPTION]);
        }
      );
  }

  /* Method For Block or Unblock
   *
   */
  async changeStatus(status) {
    let subId = this.subscriptionId;
    try {
      await this._subDetailService.changeStatus({ status, subId });
      this.getSubscriptionDetail();
    } catch (err) {}
  }

  /* Method For getting plan subscribers
   *
   */
  getAllPlanSubscribers() {
    let data = {
      ...this.validPageOptions,
      subscriptionId: this.subscriptionId
    };
    this._subDetailService.getAllCompanySubscribers(data).subscribe(
      response => {
        this.subscribers.data = response.data.companyList;
        this.total = response.data.totalCount;
      },
      err => {}
    );
  }

  /*
    Method For Changing The Pagination
  */
  changePage(event: MatPaginator) {
    this.pageOptionsOnChange = event;
    if (this.total == 0) {
      return;
    }
    this.getAllPlanSubscribers();
  }

  /*
   Method For Searching
 */
  setSearch(event) {
    this.search = event;
    this.resetPages();
    this.getAllPlanSubscribers();
  }

  /*
    Method For Sorting
  */
  sortData(event) {
    this.sortOptions = event;
    this.resetPages();
    this.getAllPlanSubscribers();
  }
}
