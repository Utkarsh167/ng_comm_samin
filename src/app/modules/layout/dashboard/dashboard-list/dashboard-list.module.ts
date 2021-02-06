import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardListComponent } from './component/dashboard-list.component';
import { Routes, RouterModule } from '@angular/router';
import { MatIconModule, MatInputModule, MatButtonModule, MatSelectModule, MatTableModule, MatPaginatorModule, MatMenuModule, MatFormFieldModule, MatDatepickerModule } from '@angular/material';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { CheckNullPipeModule } from 'src/app/pipes/check-null/check-null-pipe.module';
import { AbsoluteRoutingModule } from 'src/app/pipes/absolute-routing/absolute-routing.module';
import { DateFilterModule } from '../../layout-shared/date-filter/date-filter.module';
import { SearchFilterModule } from '../../layout-shared/search-filter/search-filter.module';
import { DashboardService } from './service/dashboard.service';
import { FilterCountModule } from '../../layout-shared/filter-count/filter-count.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';
const routes: Routes = [
  {
    path: '',
    component: DashboardListComponent
  }

];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    MatMenuModule,
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
    MatPaginatorModule,
    MatMenuModule,
    CustomDatePipeModule,
    CheckNullPipeModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FilterCountModule
  ],
  declarations: [DashboardListComponent],
  providers:[DashboardService]
})
export class DashboardListModule { }
