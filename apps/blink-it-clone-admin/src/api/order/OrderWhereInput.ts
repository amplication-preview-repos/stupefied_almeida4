import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type OrderWhereInput = {
  contactDetails?: StringNullableFilter;
  customerName?: StringNullableFilter;
  id?: StringFilter;
  medsRequired?: StringNullableFilter;
  orderDate?: DateTimeNullableFilter;
  prescriptionImage?: JsonFilter;
};
