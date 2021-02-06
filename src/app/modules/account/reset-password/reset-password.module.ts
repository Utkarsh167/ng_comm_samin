import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordComponent } from './component/reset-password.component';
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorPipeModule } from 'src/app/pipes/validation-error/validation-error.pipe.module';
import { ResetPasswordService } from './service/reset-password.service';

const routes: Routes = [
  { path: '', component: ResetPasswordComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    ValidationErrorPipeModule
  ],
  declarations: [ResetPasswordComponent],
  providers: [ResetPasswordService]
})
export class ResetPasswordModule { }
