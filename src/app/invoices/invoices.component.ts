import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-invoices",
  templateUrl: "./invoices.component.html",
  styleUrls: ["./invoices.component.scss"],
})
export class InvoicesComponent implements OnInit {
  menuItems: { label: string; link: string }[] = [
    { label: "Invoice list", link: "invoice-list" },
    { label: "Add invoice", link: "add-invoice" },
    { label: "Invoice details", link: "invoice-details" },
  ];

  constructor() {}

  ngOnInit(): void {}
}
