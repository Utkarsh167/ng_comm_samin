import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionComponent } from './subscription.component';
import { Routes, RouterModule } from '@angular/router';
import { SUBSCRIPTION_ADD, SUBSCRIPTION_DETAIL, SUBSCRIPTION_EDIT } from 'src/app/constant/routes';

const subscribeRoutes: Routes = [
  {
    path: '', component: SubscriptionComponent,

    children: [
      {
        path: '', loadChildren: () => import('./subscription-list/subscription-list.module').then(m => m.SubscriptionListModule),
      },
      {
        path: SUBSCRIPTION_ADD, loadChildren: () => import('./subscription-add/subscription-add.module').then(m => m.SubscriptionAddModule),
      },

      {
        path: `${SUBSCRIPTION_EDIT}/:subId`, loadChildren: () => import('./subscription-add/subscription-add.module').then(m => m.SubscriptionAddModule),
      },

      {
        path: `${SUBSCRIPTION_DETAIL}/:subId`, loadChildren: () => import('./subscription-detail/subscription-detail.module').then(m => m.SubscriptionDetailModule),
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(subscribeRoutes)
  ],
  declarations: [SubscriptionComponent]
})
export class SubscriptionModule { }
