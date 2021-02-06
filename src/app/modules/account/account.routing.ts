import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { LOGIN, FORGOT_PASSWORD, RESET_PASSWORD } from '../../constant/routes';
import { AccountGuard } from 'src/app/guards/account.guard';

const accountRoutes: Routes = [
    {
        path: '',
        component: AccountComponent,
        children: [
            { path: '', redirectTo: LOGIN, pathMatch: 'full' },
            { path: LOGIN, loadChildren: () => import('./login/login.module').then(m => m.LoginModule), canLoad: [AccountGuard], canActivate: [AccountGuard] },
            { path: FORGOT_PASSWORD, loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule), canLoad: [AccountGuard], canActivate: [AccountGuard] },
            { path: `${RESET_PASSWORD}/:token`, loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordModule), canLoad: [AccountGuard], canActivate: [AccountGuard] },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(accountRoutes)],
    exports: [RouterModule],
    providers: []
})
export class AccountRoutingModule { }
