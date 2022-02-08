import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { InvoicesService } from "../invoices.service";
import { AlertService } from "../../core/alert.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-invoice-detaiils",
  templateUrl: "./invoice-details.component.html",
  styleUrls: ["./invoice-details.component.scss"],
})
export class InvoiceDetailsComponent implements OnInit, OnDestroy {
  invoicesForm = new FormGroup({
    issueDate: new FormControl({ value: null, disabled: true }, [
      Validators.required,
    ]),
    number: new FormControl({ value: null, disabled: true }, [
      Validators.required,
    ]),
    vendor: new FormControl({ value: null, disabled: true }, [
      Validators.required,
    ]),
    amount: new FormControl({ value: null, disabled: true }, [
      Validators.required,
    ]),
  });

  constructor(
    public invoicesService: InvoicesService,
    private alertService: AlertService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.invoicesService.selectedInvoice.subscribe((value) => {
      if (value === null) {
        Object.keys(this.invoicesForm.controls).forEach((key) => {
          this.invoicesForm.get(key)?.enable();
          this.invoicesForm.get(key)?.setValue(null);
        });
      } else {
        this.invoicesForm.get("issueDate")?.setValue(value.issueDate);
        this.invoicesForm.get("number")?.setValue(value.number);
        this.invoicesForm.get("vendor")?.setValue(value.vendor);
        this.invoicesForm.get("amount")?.setValue(value.amount);
      }
    });
  }

  ngOnDestroy(): void {
    this.invoicesService.selectInvoice(null);
  }

  onSubmit() {
    if (this.invoicesForm.valid) {
      this.invoicesService
        .addInvoice(this.invoicesForm.value)
        .subscribe((res) => {
          if (res) {
            this.alertService.showSnackbar("New invoice added", "success");
            this.router.navigate(["/invoices/invoice-list"]);
          } else {
            this.alertService.showSnackbar("Something went wrong", "error");
          }
        });
    }
  }
}
