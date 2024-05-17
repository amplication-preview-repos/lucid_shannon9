import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type PaymentUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
  purchaseDate?: Date | null;
};
