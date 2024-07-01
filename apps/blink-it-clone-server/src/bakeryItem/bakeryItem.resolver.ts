import * as graphql from "@nestjs/graphql";
import { BakeryItemResolverBase } from "./base/bakeryItem.resolver.base";
import { BakeryItem } from "./base/BakeryItem";
import { BakeryItemService } from "./bakeryItem.service";

@graphql.Resolver(() => BakeryItem)
export class BakeryItemResolver extends BakeryItemResolverBase {
  constructor(protected readonly service: BakeryItemService) {
    super(service);
  }
}
