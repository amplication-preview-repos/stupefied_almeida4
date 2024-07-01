import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PharmacyService } from "./pharmacy.service";
import { PharmacyControllerBase } from "./base/pharmacy.controller.base";

@swagger.ApiTags("pharmacies")
@common.Controller("pharmacies")
export class PharmacyController extends PharmacyControllerBase {
  constructor(protected readonly service: PharmacyService) {
    super(service);
  }
}
