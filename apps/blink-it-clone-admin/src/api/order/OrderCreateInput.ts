import { InputJsonValue } from "../../types";

export type OrderCreateInput = {
  contactDetails?: string | null;
  customerName?: string | null;
  medsRequired?: string | null;
  orderDate?: Date | null;
  prescriptionImage?: InputJsonValue;
};
