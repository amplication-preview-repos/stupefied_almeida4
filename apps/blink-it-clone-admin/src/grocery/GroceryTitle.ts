import { Grocery as TGrocery } from "../api/grocery/Grocery";

export const GROCERY_TITLE_FIELD = "name";

export const GroceryTitle = (record: TGrocery): string => {
  return record.name?.toString() || String(record.id);
};
