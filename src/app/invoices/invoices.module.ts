import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InvoicesRoutingModule } from "./invoices-routing.module";
import { InvoicesComponent } from "./invoices.component";
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  declarations: [InvoicesComponent],
  imports: [CommonModule, InvoicesRoutingModule, MatToolbarModule],
})
export class InvoicesModule {}
