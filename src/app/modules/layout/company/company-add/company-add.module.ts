import { CompanyAddComponent } from './../company-add/component/company-add.component';
import { AbsoluteRoutingModule } from './../../../../pipes/absolute-routing/absolute-routing.module';
import { MatIconModule, MatButtonModule, MatInputModule, MatSelectModule, MatRadioModule, MatTooltipModule } from '@angular/material';
import { SearchFilterModule } from './../../layout-shared/search-filter/search-filter.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CompanyAddService } from './service/company-add.service';
import { ValidationErrorPipeModule } from 'src/app/pipes/validation-error/validation-error.pipe.module';
import { GooglePlacesModule } from 'src/app/directives/google-places/google-places.module';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators'; // <-- #2 import module
import { NospaceModule } from 'src/app/directives/nospace/nospace.module';
import { NumberOnlyModule } from 'src/app/directives/number-only/number-only.module';

const routes: Routes = [
  {
    path: '',
    component: CompanyAddComponent
  },
];
@NgModule({
  declarations: [CompanyAddComponent],
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
    RxReactiveFormsModule,
    NospaceModule,
    NumberOnlyModule
  ],
  providers: [CompanyAddService]
})
export class CompanyAddModule { }

