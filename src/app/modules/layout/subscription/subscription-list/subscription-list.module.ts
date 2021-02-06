import { CheckNullPipeModule } from './../../../../pipes/check-null/check-null-pipe.module';
import { CustomDatePipeModule } from './../../../../pipes/custom-date/custom-date-pipe.module';
import { MatIconModule, MatInputModule, MatSelectModule, MatButtonModule, MatTableModule, MatPaginatorModule, MatMenuModule, MatFormFieldModule, MatDatepickerModule, MatTooltipModule } from '@angular/material';
import { SearchFilterModule } from './../../layout-shared/search-filter/search-filter.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionListComponent } from './component/subscription-list.component';
import { Routes, RouterModule } from '@angular/router';
import { AbsoluteRoutingModule } from 'src/app/pipes/absolute-routing/absolute-routing.module';
import { DateFilterModule } from '../../layout-shared/date-filter/date-filter.module';
import { SubscriptionListService } from './service/subscription-list.service';
import { DropdownFilterModule } from '../../layout-shared/dropdown-filter/dropdown-filter.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterCountModule } from '../../layout-shared/filter-count/filter-count.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionListComponent
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
    MatTooltipModule,
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
  declarations: [SubscriptionListComponent],
  providers: [SubscriptionListService]
})
export class SubscriptionListModule { }
