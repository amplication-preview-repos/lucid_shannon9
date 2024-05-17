import { Customer } from "../customer/Customer";
import { Product } from "../product/Product";

export type Payment = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  product?: Product | null;
  purchaseDate: Date | null;
  updatedAt: Date;
};
