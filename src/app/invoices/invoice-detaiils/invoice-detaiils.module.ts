import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceDetaiilsRoutingModule } from './invoice-detaiils-routing.module';
import { InvoiceDetaiilsComponent } from './invoice-detaiils.component';


@NgModule({
  declarations: [
    InvoiceDetaiilsComponent
  ],
  imports: [
    CommonModule,
    InvoiceDetaiilsRoutingModule
  ]
})
export class InvoiceDetaiilsModule { }
