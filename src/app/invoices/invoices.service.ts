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

  constructor(private http: HttpClient) {
    this.fetchInvoiceList();
    this.fetchVendorList();
  }

  fetchInvoiceList() {
    return this.http
      .get(environment.backend.baseUrl + "invoice-list")
      .subscribe((res) => this._invoiceList.next(res as Invoice[]));
  }

  fetchVendorList() {
    return this.http
        .get(environment.backend.baseUrl + "vendor-list")
        .subscribe((res) => this._vendorList.next(res as Vendor[]));
  }
}
