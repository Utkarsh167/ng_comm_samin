import { MatInputModule, MatButtonModule, MatTooltipModule, MatRadioModule, MatSelectModule, MatIconModule } from '@angular/material';
import { AbsoluteRoutingModule } from 'src/app/pipes/absolute-routing/absolute-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionAddComponent } from './component/subscription-add.component';
import { Routes, RouterModule } from '@angular/router';
import { OnlyNumberModule } from 'src/app/directives/only-number/only-number.module';
import { ValidationErrorPipeModule } from 'src/app/pipes/validation-error/validation-error.pipe.module';
import { SearchFilterModule } from '../../layout-shared/search-filter/search-filter.module';
import { SubscriptionAddService } from './service/subscription-add.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NospaceModule } from 'src/app/directives/nospace/nospace.module';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { NumberOnlyModule } from 'src/app/directives/number-only/number-only.module';


const routes: Routes = [
  {
    path: '',
    component: SubscriptionAddComponent
  },
];
@NgModule({
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
    ValidationErrorPipeModule,
    OnlyNumberModule,
    ReactiveFormsModule,
    NospaceModule,
    RxReactiveFormsModule,
    NumberOnlyModule
  ],
  declarations: [SubscriptionAddComponent],
  providers: [SubscriptionAddService]
})
export class SubscriptionAddModule { }
