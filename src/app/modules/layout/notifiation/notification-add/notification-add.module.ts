import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationAddComponent } from './component/notification-add.component';
import { Routes, RouterModule } from '@angular/router';
import { AbsoluteRoutingModule } from 'src/app/pipes/absolute-routing/absolute-routing.module';
import { MatInputModule, MatButtonModule, MatSelectModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { NotificationAddService } from './service/notification-add.service';
import { ValidationErrorPipeModule } from 'src/app/pipes/validation-error/validation-error.pipe.module';

const routes: Routes = [
  {
    path: '',
    component: NotificationAddComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AbsoluteRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    ValidationErrorPipeModule
  ],
  declarations: [NotificationAddComponent],
  providers: [NotificationAddService]
})
export class NotificationAddModule { }
