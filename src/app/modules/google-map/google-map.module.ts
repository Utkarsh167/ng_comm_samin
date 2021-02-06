import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleAutocompleteComponent } from './component/google-autocomplete/google-autocomplete.component';
import { MatIconModule, MatButtonModule, MatInputModule, MatSelectModule, MatRadioModule, MatTooltipModule, MatFormFieldModule } from '@angular/material';
import { ValidationErrorPipeModule } from 'src/app/pipes/validation-error/validation-error.pipe.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [GoogleAutocompleteComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatTooltipModule,
    MatFormFieldModule,
    ValidationErrorPipeModule,
    ReactiveFormsModule
  ],
  exports: [GoogleAutocompleteComponent]
})
export class GoogleMapModule { }
