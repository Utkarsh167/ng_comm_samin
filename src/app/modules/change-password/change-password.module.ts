import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './change-password.component';
import { MatCardModule, MatIconModule, MatInputModule, MatButtonModule, MatFormFieldModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { AbsoluteRoutingModule } from 'src/app/pipes/absolute-routing/absolute-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { ChangePasswordService } from './service/change-password.service';
import { ValidationErrorPipeModule } from 'src/app/pipes/validation-error/validation-error.pipe.module';


const passwordRoutes: Routes = [

  { path: '', component: ChangePasswordComponent },

]

const MATERILA_MODULE = [
  MatCardModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  ReactiveFormsModule,
  MatInputModule,
  MatButtonModule
]

const PIPES_MODULE = [
  AbsoluteRoutingModule
]


@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(passwordRoutes),
    ...MATERILA_MODULE,
    ...PIPES_MODULE,
    ValidationErrorPipeModule
  ],
  providers: [ChangePasswordService]

})
export class ChangePasswordModule { }
