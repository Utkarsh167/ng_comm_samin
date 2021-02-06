import { MatInputModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatIconModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFilterComponent } from './date-filter.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  declarations: [DateFilterComponent],
  exports: [DateFilterComponent]
})
export class DateFilterModule { }
