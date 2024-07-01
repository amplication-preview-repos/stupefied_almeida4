import { Pharmacy as TPharmacy } from "../api/pharmacy/Pharmacy";

export const PHARMACY_TITLE_FIELD = "name";

export const PharmacyTitle = (record: TPharmacy): string => {
  return record.name?.toString() || String(record.id);
};
