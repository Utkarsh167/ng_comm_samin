import { DateFilterModule } from './../../layout-shared/date-filter/date-filter.module';
import { AbsoluteRoutingModule } from './../../../../pipes/absolute-routing/absolute-routing.module';
import { MatIconModule, MatButtonModule, MatInputModule, MatSelectModule, MatTableModule, MatPaginatorModule, MatMenuModule, MatTooltipModule } from '@angular/material';
import { SearchFilterModule } from './../../layout-shared/search-filter/search-filter.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './component/company-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListService } from './service/company-list.service';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';
import { CheckNullPipeModule } from 'src/app/pipes/check-null/check-null-pipe.module';
import { DropdownFilterModule } from 'src/app/modules/layout/layout-shared/dropdown-filter/dropdown-filter.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterCountModule } from '../../layout-shared/filter-count/filter-count.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: CompanyListComponent
  }

];

@NgModule({
  declarations: [CompanyListComponent],
  imports: [
    CommonModule,
    SharedModule,
    SearchFilterModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatButtonModule,
    AbsoluteRoutingModule,
    DateFilterModule,
    MatInputModule,
    MatTooltipModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    CustomDatePipeModule,
    CheckNullPipeModule,
    DropdownFilterModule,
    ReactiveFormsModule,
    FilterCountModule
  ],
  providers: [CompanyListService]
})
export class CompanyListModule { }
