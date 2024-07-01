import { GroceryWhereInput } from "./GroceryWhereInput";
import { GroceryOrderByInput } from "./GroceryOrderByInput";

export type GroceryFindManyArgs = {
  where?: GroceryWhereInput;
  orderBy?: Array<GroceryOrderByInput>;
  skip?: number;
  take?: number;
};
