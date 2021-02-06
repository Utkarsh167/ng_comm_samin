import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EarningListComponent } from './component/earning-list.component';
import { Routes, RouterModule } from '@angular/router';
import { AbsoluteRoutingModule } from 'src/app/pipes/absolute-routing/absolute-routing.module';
import { SearchFilterModule } from '../../layout-shared/search-filter/search-filter.module';
import { MatIconModule, MatInputModule, MatButtonModule, MatSelectModule, MatTableModule, MatPaginatorModule, MatMenuModule, MatFormFieldModule, MatDatepickerModule } from '@angular/material';
import { DateFilterModule } from '../../layout-shared/date-filter/date-filter.module';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { CheckNullPipeModule } from 'src/app/pipes/check-null/check-null-pipe.module';
import { EarningService } from './service/earning.service';
import { DropdownFilterModule } from '../../layout-shared/dropdown-filter/dropdown-filter.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterCountModule } from '../../layout-shared/filter-count/filter-count.module';

const routes: Routes = [
  {
    path: '',
    component: EarningListComponent
  }

];

@NgModule({
  imports: [
    CommonModule,
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
    MatPaginatorModule,
    MatMenuModule,
    MatFormFieldModule,
    MatDatepickerModule,
    CustomDatePipeModule,
    CheckNullPipeModule,
    DropdownFilterModule,
    ReactiveFormsModule,
    FilterCountModule
  ],
  declarations: [EarningListComponent],
  providers: [EarningService]
})
export class EarningListModule { }
