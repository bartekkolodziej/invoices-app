import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InvoiceListRoutingModule } from "./invoice-list-routing.module";
import { InvoiceListComponent } from "./invoice-list.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [InvoiceListComponent],
    imports: [
        CommonModule,
        InvoiceListRoutingModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
    ],
})
export class InvoiceListModule {}
