import { Payment } from "../payment/Payment";

export type Product = {
  createdAt: Date;
  id: string;
  payments?: Array<Payment>;
  productName: string | null;
  updatedAt: Date;
};
