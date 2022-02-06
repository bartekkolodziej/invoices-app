import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { InvoicesService } from "../invoices.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-invoice-detaiils",
  templateUrl: "./invoice-details.component.html",
  styleUrls: ["./invoice-details.component.scss"],
})
export class InvoiceDetailsComponent implements OnInit {
  invoicesForm = new FormGroup({
    issueDate: new FormControl(null, [Validators.required]),
    number: new FormControl(null, [Validators.required]),
    vendor: new FormControl(null, [Validators.required]),
    amount: new FormControl(null, [Validators.required]),
  });

  constructor(
    public invoicesService: InvoicesService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.invoicesForm.valid) {
      this.invoicesService
        .addInvoice(this.invoicesForm.value)
        .subscribe((res) => this.showSnackbar(res as boolean));
    }
  }

  showSnackbar(value: boolean) {
    const message = value ? "New invoice added" : "Something went wrong";

    this._snackBar.open(message, "Close", {
      horizontalPosition: "center",
      verticalPosition: "top",
      duration: 5000,
      panelClass: value ? "snackbar--success" : "snackbar--error",
    });
  }
}
