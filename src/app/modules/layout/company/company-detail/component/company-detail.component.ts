import { Component, OnInit } from "@angular/core";
import { CompanyDetailService } from "../service/company-detail.service";
import { Router, ActivatedRoute } from "@angular/router";
import { COMPANY } from "src/app/constant/absolute-routes";

@Component({
  selector: "app-company-detail",
  templateUrl: "./company-detail.component.html",
  styleUrls: ["./company-detail.component.scss"]
})
export class CompanyDetailComponent implements OnInit {
  companyId: string;
  company: any;
  constructor(
    private _companyDetailService: CompanyDetailService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this.companyId = this._route.snapshot.params.companyId;
    this.getCabDetail();
  }

  getCabDetail() {
    this._companyDetailService
      .getCompanyDetails({ userId: this.companyId })
      .subscribe(
        response => {
          if (!response.data) {
            this._router.navigate([COMPANY]);
          }
          this.company = response.data;
        },
        err => {
          this._router.navigate([COMPANY]);
        }
      );
  }

  async changeStatus(status) {
    let companyId = this.companyId;
    try {
      await this._companyDetailService.changeStatus({ status, companyId });
      await this.getCabDetail();
    } catch (err) {}
  }
}
