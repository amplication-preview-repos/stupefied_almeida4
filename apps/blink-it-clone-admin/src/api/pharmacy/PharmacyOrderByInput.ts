import { SortOrder } from "../../util/SortOrder";

export type PharmacyOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  expirationDate?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
