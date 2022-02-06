import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceDetaiilsComponent } from './invoice-detaiils.component';

const routes: Routes = [{ path: '', component: InvoiceDetaiilsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceDetaiilsRoutingModule { }
