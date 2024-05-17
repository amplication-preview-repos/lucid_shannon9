import { PaymentCreateNestedManyWithoutCustomersInput } from "./PaymentCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  name?: string | null;
  payments?: PaymentCreateNestedManyWithoutCustomersInput;
};
