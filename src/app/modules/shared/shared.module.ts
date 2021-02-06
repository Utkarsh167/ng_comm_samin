import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatInputModule,
  MatSnackBarModule,
  MatMenuModule,
  MatSelectModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { HttpService } from './services/http.service';
import { UtilityService } from './services/utility.service';
import { HomeGuard } from 'src/app/guards/home.guard';
import { AccountGuard } from 'src/app/guards/account.guard';
import { TokenInterceptor } from 'src/app/Interceptors/token.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AbsoluteRoutingModule } from '../../pipes/absolute-routing/absolute-routing.module';
import { StatusPipe } from '../../pipes/status-pipe/status.pipe';
import { SendNotificationComponent } from './components/send-notification/send-notification.component';

@NgModule({
  declarations: [ConfirmationModalComponent, SendNotificationComponent, StatusPipe],
  imports: [
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    MatMenuModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
    AbsoluteRoutingModule,

  ],
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    MatMenuModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
    AbsoluteRoutingModule,
    StatusPipe
  ],

  entryComponents: [
    ConfirmationModalComponent,
    SendNotificationComponent
  ],
  providers: [
    HttpService,
    UtilityService,
    HomeGuard,
    AccountGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]

})
export class SharedModule { }
