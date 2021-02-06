import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';

const dashboardRoutes: Routes = [
  {
    path: '', component: DashboardComponent,

    children: [
      {
        path: '', loadChildren: () => import('./dashboard-list/dashboard-list.module').then(m => m.DashboardListModule),
      }
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
