import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationListComponent } from './component/notification-list.component';
import { Routes, RouterModule } from '@angular/router';
import { AbsoluteRoutingModule } from 'src/app/pipes/absolute-routing/absolute-routing.module';
import { SearchFilterModule } from '../../layout-shared/search-filter/search-filter.module';
import { MatIconModule, MatInputModule, MatButtonModule, MatSelectModule, MatTableModule, MatPaginatorModule, MatMenuModule, MatFormFieldModule, MatDatepickerModule, MatDialogModule } from '@angular/material';
import { DateFilterModule } from '../../layout-shared/date-filter/date-filter.module';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { CheckNullPipeModule } from 'src/app/pipes/check-null/check-null-pipe.module';
import { NotificationListService } from './service/notification-list.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterCountModule } from '../../layout-shared/filter-count/filter-count.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: NotificationListComponent
  }

];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    AbsoluteRoutingModule,
    SearchFilterModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    AbsoluteRoutingModule,
    DateFilterModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatMenuModule,
    MatFormFieldModule,
    MatDatepickerModule,
    CustomDatePipeModule,
    CheckNullPipeModule,
    ReactiveFormsModule,
    FilterCountModule,
    

  ],
  declarations: [NotificationListComponent],
  // entryComponents: [SendNotificationComponent],
  providers: [NotificationListService]
})
export class NotificationListModule { }
