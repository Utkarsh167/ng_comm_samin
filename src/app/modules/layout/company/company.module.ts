import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company.component';
import { HomeGuard } from 'src/app/guards/home.guard';
import { COMPANY_ADD, COMPANY_EDIT, COMPANY_DETAIL } from 'src/app/constant/routes';

const companyRoutes: Routes = [
  {
    path: '', component: CompanyComponent,

    children: [
      {
        path: '', loadChildren: () => import('./company-list/company-list.module').then(m => m.CompanyListModule),
        canLoad: [HomeGuard], canActivate: [HomeGuard]
      },
      {
        path: COMPANY_ADD, loadChildren: () => import('./company-add/company-add.module').then(m => m.CompanyAddModule), canLoad: [HomeGuard], canActivate: [HomeGuard]
      },
      {
        path: `${COMPANY_DETAIL}/:companyId`, loadChildren: () => import('./company-detail/company-detail.module').then(m => m.CompanyDetailModule), canLoad: [HomeGuard], canActivate: [HomeGuard]
      },

      {
        path: `${COMPANY_EDIT}/:companyId`, loadChildren: () => import('./company-edit/company-edit.module').then(m => m.CompanyEditModule), canLoad: [HomeGuard], canActivate: [HomeGuard]
      },

    ]
  }
];

@NgModule({
  declarations: [CompanyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(companyRoutes),
  ]
})
export class CompanyModule { }
