import { PaymentUpdateManyWithoutProductsInput } from "./PaymentUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  payments?: PaymentUpdateManyWithoutProductsInput;
  productName?: string | null;
};
