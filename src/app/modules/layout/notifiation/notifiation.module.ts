import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifiationComponent } from './notifiation.component';
import { Routes, RouterModule } from '@angular/router';
import { NOTIFICATION_ADD } from 'src/app/constant/routes';

const notifyRoutes: Routes = [
  {
    path: '', component: NotifiationComponent,

    children: [
      {
        path: '', loadChildren: () => import('./notification-list/notification-list.module').then(m => m.NotificationListModule),
      },
      {
        path: NOTIFICATION_ADD, loadChildren: () => import('./notification-add/notification-add.module').then(m => m.NotificationAddModule),
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(notifyRoutes)
  ],
  declarations: [NotifiationComponent]
})
export class NotifiationModule { }
