import * as graphql from "@nestjs/graphql";
import { GroceryResolverBase } from "./base/grocery.resolver.base";
import { Grocery } from "./base/Grocery";
import { GroceryService } from "./grocery.service";

@graphql.Resolver(() => Grocery)
export class GroceryResolver extends GroceryResolverBase {
  constructor(protected readonly service: GroceryService) {
    super(service);
  }
}
