export interface Vendor {
  id: number;
  name: string;
  address: string;
}

export interface Invoice {
  number: number;
  issueDate: Date;
  vendor: Vendor;
  amount: number;
}
