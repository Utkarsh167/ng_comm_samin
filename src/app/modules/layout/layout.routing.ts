import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { COMPANY, SUBSCRIPTION, EARNING, NOTIFICATION, DASHBOARD, ADMIN_PROFILE, CHANGE_PASSWORD } from 'src/app/constant/routes';
import { PagesComponent } from './pages/pages.component';
import { HomeGuard } from 'src/app/guards/home.guard';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,

        children: [
            { path: '', redirectTo: COMPANY, pathMatch: 'full' },
            { path: COMPANY, loadChildren: () => import('./company/company.module').then(m => m.CompanyModule), canLoad: [HomeGuard], canActivate: [HomeGuard] },
            { path: SUBSCRIPTION, loadChildren: () => import('./subscription/subscription.module').then(m => m.SubscriptionModule) },
            { path: EARNING, loadChildren: () => import('./earning/earning.module').then(m => m.EarningModule), },
            { path: NOTIFICATION, loadChildren: () => import('./notifiation/notifiation.module').then(m => m.NotifiationModule), },
            { path: DASHBOARD, loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), },
            { path: ADMIN_PROFILE, loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule)},
            { path: CHANGE_PASSWORD, loadChildren: () => import('../change-password/change-password.module').then(m => m.ChangePasswordModule),},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class LayoutRoutingModule { }
