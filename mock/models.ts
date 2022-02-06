import { Invoice, Vendor } from "../src/app/model";
import faker from "@faker-js/faker";

export class VendorMock implements Vendor {
  address = `${faker.address.zipCode()} ${faker.address.city()}, ${faker.address.streetAddress()} `;
  id = faker.datatype.number();
  name = `${faker.name.firstName()} ${faker.name.lastName()}`;
}

export class InvoiceMock implements Invoice {
  constructor(vendorMock: Vendor = new VendorMock()) {
    this.vendor = vendorMock;
  }
  amount = faker.datatype.number();
  issueDate = faker.date.past();
  number = faker.datatype.number();
  vendor: Vendor;
}
