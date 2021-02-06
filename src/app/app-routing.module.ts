import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ADMIN, ACCOUNT } from './constant/routes';
import { AccountGuard } from './guards/account.guard';
import { HomeGuard } from './guards/home.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: ADMIN, pathMatch: 'full' },
  { path: ADMIN, loadChildren: () => import('./modules/layout/layout.module').then(m => m.LayoutModule), canLoad: [HomeGuard], canActivate: [HomeGuard] },
  { path: ACCOUNT, loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule), canLoad: [AccountGuard], canActivate: [AccountGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { scrollPositionRestoration: 'top' }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]

})
export class AppRoutingModule { }
