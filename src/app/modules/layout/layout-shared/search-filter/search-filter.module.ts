import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilterComponent } from './search-filter.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule, MatFormFieldModule, MatButtonModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [
    SearchFilterComponent,
  ],
  exports: [
    SearchFilterComponent,
  ]
})
export class SearchFilterModule { }
