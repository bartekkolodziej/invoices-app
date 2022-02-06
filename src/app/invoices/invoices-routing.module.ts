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
          import("./invoice-details/invoice-details.module").then(
            (m) => m.InvoiceDetailsModule
          ),
      },
      {
        path: "invoice-details/:number",
        loadChildren: () =>
          import("./invoice-details/invoice-details.module").then(
            (m) => m.InvoiceDetailsModule
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
