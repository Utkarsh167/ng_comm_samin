import { Component, OnInit } from '@angular/core';
import { EarningDetailService } from '../service/earning-detail.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EARNING } from 'src/app/constant/absolute-routes';

@Component({
  selector: 'app-earning-detail',
  templateUrl: './earning-detail.component.html',
  styleUrls: ['./earning-detail.component.scss']
})
export class EarningDetailComponent implements OnInit {

  earningId: string;
  earningData: any;
  constructor(private _earningDetailService: EarningDetailService,
    private _route: ActivatedRoute,
    private _router: Router) {
  }

  ngOnInit() {
    this.earningId = this._route.snapshot.params.earningId;
    this.getEarningDetail();
  }

  /* Method For getting earning details
    *
  */
  getEarningDetail() {
    this._earningDetailService.getDetails({ userId: this.earningId }).subscribe(
      response => {
        this.earningData = response.data;
      },
      err => {
        this._router.navigate([EARNING]);
      }
    )
  }

}
