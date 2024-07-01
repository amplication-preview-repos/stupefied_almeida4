import { BakeryItem as TBakeryItem } from "../api/bakeryItem/BakeryItem";

export const BAKERYITEM_TITLE_FIELD = "name";

export const BakeryItemTitle = (record: TBakeryItem): string => {
  return record.name?.toString() || String(record.id);
};
