import { InputJsonValue } from "../../types";

export type OrderUpdateInput = {
  contactDetails?: string | null;
  customerName?: string | null;
  medsRequired?: string | null;
  orderDate?: Date | null;
  prescriptionImage?: InputJsonValue;
};
