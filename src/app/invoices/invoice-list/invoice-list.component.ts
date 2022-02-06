import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Invoice } from "../../model";
import { InvoicesService } from "../invoices.service";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: "app-invoice-list",
  templateUrl: "./invoice-list.component.html",
  styleUrls: ["./invoice-list.component.scss"],
})
export class InvoiceListComponent implements OnInit {
  displayedColumns: string[] = ["number", "vendor", "amount"];
  dataSource = new MatTableDataSource<Invoice>();

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public invoicesService: InvoicesService) {
    this.invoicesService.invoiceList.subscribe(
      (value) => (this.dataSource.data = value)
    );

    this.dataSource.filterPredicate = (data: Invoice, filter: string) =>
      data.vendor.name.includes(filter);
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(vendorName: string): void {
    this.dataSource.filter = vendorName;
  }
}
