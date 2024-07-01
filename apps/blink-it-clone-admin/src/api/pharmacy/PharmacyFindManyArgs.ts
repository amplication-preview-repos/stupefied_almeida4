import { PharmacyWhereInput } from "./PharmacyWhereInput";
import { PharmacyOrderByInput } from "./PharmacyOrderByInput";

export type PharmacyFindManyArgs = {
  where?: PharmacyWhereInput;
  orderBy?: Array<PharmacyOrderByInput>;
  skip?: number;
  take?: number;
};
