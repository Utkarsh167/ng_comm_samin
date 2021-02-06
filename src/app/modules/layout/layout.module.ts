import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout-parts/header/header.component';
import { FooterComponent } from './layout-parts/footer/footer.component';
import { LayoutRoutingModule } from './layout.routing';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, PagesComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule { }
