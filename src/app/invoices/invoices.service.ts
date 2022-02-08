import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { Invoice, Vendor } from "../model";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class InvoicesService {
  private _invoiceList: BehaviorSubject<Invoice[]> = new BehaviorSubject(
    [] as Invoice[]
  );
  public readonly invoiceList: Observable<Invoice[]> =
    this._invoiceList.asObservable();

  private _vendorList: BehaviorSubject<Vendor[]> = new BehaviorSubject(
    [] as Vendor[]
  );
  public readonly vendorList: Observable<Vendor[]> =
    this._vendorList.asObservable();

  private _selectedInvoice: BehaviorSubject<Invoice | null> = new BehaviorSubject<Invoice | null>(null);
  public readonly selectedInvoice: Observable<Invoice | null> =
      this._selectedInvoice.asObservable();

  constructor(private http: HttpClient) {
    this.fetchInvoiceList();
    this.fetchVendorList();
  }

  fetchInvoiceList() {
    this.http
      .get(environment.backend.baseUrl + "invoice-list")
      .subscribe((res) => this._invoiceList.next(res as Invoice[]));
  }

  fetchVendorList() {
    this.http
      .get(environment.backend.baseUrl + "vendor-list")
      .subscribe((res) => this._vendorList.next(res as Vendor[]));
  }

  addInvoice(invoice: Invoice) {
    const obs = this.http.post(
      environment.backend.baseUrl + "add-invoice",
      invoice
    );

    obs.subscribe((res) => {
      if (res) this.fetchInvoiceList();
    });

    return obs;
  }

  selectInvoice(invoice: Invoice | null) {
    this._selectedInvoice.next(invoice);
  }
}
