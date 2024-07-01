import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BakeryService } from "./bakery.service";
import { BakeryControllerBase } from "./base/bakery.controller.base";

@swagger.ApiTags("bakeries")
@common.Controller("bakeries")
export class BakeryController extends BakeryControllerBase {
  constructor(protected readonly service: BakeryService) {
    super(service);
  }
}
