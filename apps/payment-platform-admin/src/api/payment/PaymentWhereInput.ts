import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PaymentWhereInput = {
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
  purchaseDate?: DateTimeNullableFilter;
};
