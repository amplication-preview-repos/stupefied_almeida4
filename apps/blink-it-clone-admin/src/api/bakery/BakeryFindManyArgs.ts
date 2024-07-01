import { BakeryWhereInput } from "./BakeryWhereInput";
import { BakeryOrderByInput } from "./BakeryOrderByInput";

export type BakeryFindManyArgs = {
  where?: BakeryWhereInput;
  orderBy?: Array<BakeryOrderByInput>;
  skip?: number;
  take?: number;
};
