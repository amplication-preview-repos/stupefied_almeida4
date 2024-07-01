import { SortOrder } from "../../util/SortOrder";

export type BakeryOrderByInput = {
  bakedOn?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
