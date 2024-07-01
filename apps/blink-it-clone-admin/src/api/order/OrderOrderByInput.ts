import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  contactDetails?: SortOrder;
  createdAt?: SortOrder;
  customerName?: SortOrder;
  id?: SortOrder;
  medsRequired?: SortOrder;
  orderDate?: SortOrder;
  prescriptionImage?: SortOrder;
  updatedAt?: SortOrder;
};
