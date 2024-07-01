import * as graphql from "@nestjs/graphql";
import { BakeryResolverBase } from "./base/bakery.resolver.base";
import { Bakery } from "./base/Bakery";
import { BakeryService } from "./bakery.service";

@graphql.Resolver(() => Bakery)
export class BakeryResolver extends BakeryResolverBase {
  constructor(protected readonly service: BakeryService) {
    super(service);
  }
}
