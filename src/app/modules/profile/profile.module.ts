import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule, Routes } from '@angular/router';
import { AbsoluteRoutingModule } from 'src/app/pipes/absolute-routing/absolute-routing.module';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ProfileService } from './service/profile.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorPipeModule } from 'src/app/pipes/validation-error/validation-error.pipe.module';



const profileRoutes: Routes = [

  { path: '', component: ProfileComponent }
]

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    RouterModule.forChild(profileRoutes),
    CommonModule,
    AbsoluteRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    ValidationErrorPipeModule
  ],
  providers: [ProfileService]
})
export class ProfileModule { }
