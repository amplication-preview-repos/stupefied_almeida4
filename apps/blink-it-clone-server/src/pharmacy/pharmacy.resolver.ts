import * as graphql from "@nestjs/graphql";
import { PharmacyResolverBase } from "./base/pharmacy.resolver.base";
import { Pharmacy } from "./base/Pharmacy";
import { PharmacyService } from "./pharmacy.service";

@graphql.Resolver(() => Pharmacy)
export class PharmacyResolver extends PharmacyResolverBase {
  constructor(protected readonly service: PharmacyService) {
    super(service);
  }
}
