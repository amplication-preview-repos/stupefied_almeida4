import { Bakery as TBakery } from "../api/bakery/Bakery";

export const BAKERY_TITLE_FIELD = "name";

export const BakeryTitle = (record: TBakery): string => {
  return record.name?.toString() || String(record.id);
};
