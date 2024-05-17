import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type PaymentCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
  purchaseDate?: Date | null;
};
