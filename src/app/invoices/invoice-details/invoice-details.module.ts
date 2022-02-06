import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InvoiceDetailsRoutingModule } from "./invoice-details-routing.module";
import { InvoiceDetailsComponent } from "./invoice-details.component";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { ReactiveFormsModule } from "@angular/forms";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatListModule } from "@angular/material/list";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
  declarations: [InvoiceDetailsComponent],
  imports: [
    CommonModule,
    InvoiceDetailsRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatListModule,
    MatSnackBarModule,
  ],
})
export class InvoiceDetailsModule {}
