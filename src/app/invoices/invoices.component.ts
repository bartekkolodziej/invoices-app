import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-invoices",
  templateUrl: "./invoices.component.html",
  styleUrls: ["./invoices.component.scss"],
})
export class InvoicesComponent implements OnInit {
  pageTitle = "Invoices";

  constructor(private router: Router) {
    router.events.subscribe(() => {
      if (router.url.includes("invoice-list")) this.pageTitle = "Invoice list";
      else if (router.url.includes("invoice-details"))
        this.pageTitle = "Invoice details";
      else if (router.url.includes("add-invoice"))
        this.pageTitle = "Add invoice";
    });
  }

  ngOnInit(): void {}
}
