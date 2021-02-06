import { EARNING_DETAIL } from './../../../constant/routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EarningComponent } from './earning.component';
import { Routes, RouterModule } from '@angular/router';

const subscribeRoutes: Routes = [
  {
    path: '', component: EarningComponent,

    children: [
      {
        path: '', loadChildren: () => import('./earning-list/earning-list.module').then(m => m.EarningListModule),
      },
      {
        path: `${EARNING_DETAIL}/:earningId`, loadChildren: () => import('./earning-detail/earning-detail.module').then(m => m.EarningDetailModule),
      },
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(subscribeRoutes)
  ],
  declarations: [EarningComponent]
})
export class EarningModule { }
