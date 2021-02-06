import { AbsoluteRoutingModule } from './../../../../pipes/absolute-routing/absolute-routing.module';
import { MatIconModule, MatButtonModule, MatInputModule, MatSelectModule, MatRadioModule, MatTooltipModule } from '@angular/material';
import { SearchFilterModule } from './../../layout-shared/search-filter/search-filter.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailComponent } from './component/company-detail.component';
import { CompanyDetailService } from './service/company-detail.service';
import { CheckNullPipeModule } from 'src/app/pipes/check-null/check-null-pipe.module';
import { CustomDatePipeModule } from 'src/app/pipes/custom-date/custom-date-pipe.module';

const routes: Routes = [
  {
    path: '',
    component: CompanyDetailComponent
  },
];
@NgModule({
  declarations: [CompanyDetailComponent],
  imports: [
    CommonModule,
    SearchFilterModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatButtonModule,
    AbsoluteRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatIconModule,
    MatTooltipModule,
    CheckNullPipeModule,
    CustomDatePipeModule
  ],
  providers: [CompanyDetailService]
})
export class CompanyDetailModule { }

