import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InvoicesComponent } from "./invoices.component";

const routes: Routes = [
  {
    path: "",
    component: InvoicesComponent,
    children: [
      {
        path: "invoice-list",
        loadChildren: () =>
          import("./invoice-list/invoice-list.module").then(
            (m) => m.InvoiceListModule
          ),
      },
      {
        path: "add-invoice",
        loadChildren: () =>
          import("./add-invoice/add-invoice.module").then(
            (m) => m.AddInvoiceModule
          ),
      },
      {
        path: "invoice-details",
        loadChildren: () =>
          import("./invoice-detaiils/invoice-detaiils.module").then(
            (m) => m.InvoiceDetaiilsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoicesRoutingModule {}
