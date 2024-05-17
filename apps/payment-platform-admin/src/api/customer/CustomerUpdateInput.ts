import { PaymentUpdateManyWithoutCustomersInput } from "./PaymentUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  name?: string | null;
  payments?: PaymentUpdateManyWithoutCustomersInput;
};
