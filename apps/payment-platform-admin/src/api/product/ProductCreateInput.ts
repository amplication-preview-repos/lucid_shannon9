import { PaymentCreateNestedManyWithoutProductsInput } from "./PaymentCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  payments?: PaymentCreateNestedManyWithoutProductsInput;
  productName?: string | null;
};
