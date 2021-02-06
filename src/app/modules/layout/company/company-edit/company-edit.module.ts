import { AbsoluteRoutingModule } from './../../../../pipes/absolute-routing/absolute-routing.module';
import { MatIconModule, MatButtonModule, MatInputModule, MatSelectModule, MatRadioModule, MatTooltipModule } from '@angular/material';
import { SearchFilterModule } from './../../layout-shared/search-filter/search-filter.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ValidationErrorPipeModule } from 'src/app/pipes/validation-error/validation-error.pipe.module';
import { GooglePlacesModule } from 'src/app/directives/google-places/google-places.module';
import { CompanyEditComponent } from './component/company-edit.component';
import { CompanyEditService } from './service/company-edit.service';
import { NumberOnlyModule } from 'src/app/directives/number-only/number-only.module';


const routes: Routes = [
  {
    path: '',
    component: CompanyEditComponent
  },
];

@NgModule({
  declarations: [CompanyEditComponent],
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
    MatTooltipModule,
    ReactiveFormsModule,
    FormsModule,
    ValidationErrorPipeModule,
    GooglePlacesModule,
    NumberOnlyModule
  ],
  providers: [CompanyEditService]
})
export class CompanyEditModule { }
