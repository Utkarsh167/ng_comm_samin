import { MatButtonModule, MatMenuModule, MatIconModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionDetailComponent } from './component/subscription-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { SearchFilterModule } from '../../layout-shared/search-filter/search-filter.module';
import { SubscriptionDetailService } from './service/subscription-detail.service';
import { CheckNullPipeModule } from 'src/app/pipes/check-null/check-null-pipe.module';
import { AbsoluteRoutingModule } from 'src/app/pipes/absolute-routing/absolute-routing.module';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';
const routes: Routes = [
  {
    path: '',
    component: SubscriptionDetailComponent
  },
];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    SearchFilterModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    CheckNullPipeModule,
    AbsoluteRoutingModule,
    CustomDatePipeModule,
    MatSortModule,

  ],
  declarations: [SubscriptionDetailComponent],
  providers: [SubscriptionDetailService]
})
export class SubscriptionDetailModule { }
