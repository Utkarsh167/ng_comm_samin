import { AbsoluteRoutingModule } from 'src/app/pipes/absolute-routing/absolute-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EarningDetailComponent } from './component/earning-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { EarningDetailService } from './service/earning-detail.service';
import { CheckNullPipeModule } from 'src/app/pipes/check-null/check-null-pipe.module';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';

const routes: Routes = [
  {
    path: '',
    component: EarningDetailComponent
  }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AbsoluteRoutingModule,
    CustomDatePipeModule,
    CheckNullPipeModule
  ],
  declarations: [EarningDetailComponent],
  providers: [EarningDetailService]
})
export class EarningDetailModule { }
