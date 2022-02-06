import { InvoiceMock, VendorMock } from "./models";
import { Request, Response } from "express";

const express = require("express");
const cors = require("cors");
const PORT = 8000;
const HOST = "localhost";
const app = express();

const vendors = Array.from({ length: 10 }, () => new VendorMock());
const invoices = Array.from(
  { length: 100 },
  () => new InvoiceMock(vendors[Math.floor(Math.random() * vendors.length)])
);

app.use(cors({ credentials: true, origin: "http://localhost:4200" }));
app.use(express.json());

app.listen(PORT, HOST, () => {
  console.log(`Mock server is running at http://${HOST}:${PORT}`);
});

app.get("/invoice-list", (req: Request, res: Response) => {
  return res.json(invoices);
});

app.get("/vendor-list", (req: Request, res: Response) => {
  return res.json(vendors);
});

app.post("/add-invoice", (req: Request, res: Response) => {
  invoices.push(req.body);
  return res.json(true);
});
