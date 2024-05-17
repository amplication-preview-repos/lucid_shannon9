import { Payment } from "../payment/Payment";

export type Customer = {
  createdAt: Date;
  id: string;
  name: string | null;
  payments?: Array<Payment>;
  updatedAt: Date;
};
