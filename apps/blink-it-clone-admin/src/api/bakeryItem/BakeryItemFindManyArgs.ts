import { BakeryItemWhereInput } from "./BakeryItemWhereInput";
import { BakeryItemOrderByInput } from "./BakeryItemOrderByInput";

export type BakeryItemFindManyArgs = {
  where?: BakeryItemWhereInput;
  orderBy?: Array<BakeryItemOrderByInput>;
  skip?: number;
  take?: number;
};
