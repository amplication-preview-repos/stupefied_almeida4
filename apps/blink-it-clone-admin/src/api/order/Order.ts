import { JsonValue } from "type-fest";

export type Order = {
  contactDetails: string | null;
  createdAt: Date;
  customerName: string | null;
  id: string;
  medsRequired: string | null;
  orderDate: Date | null;
  prescriptionImage: JsonValue;
  updatedAt: Date;
};
