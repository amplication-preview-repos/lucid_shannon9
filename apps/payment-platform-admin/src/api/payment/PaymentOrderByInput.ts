import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  purchaseDate?: SortOrder;
  updatedAt?: SortOrder;
};
