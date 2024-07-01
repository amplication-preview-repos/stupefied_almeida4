import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BakeryItemService } from "./bakeryItem.service";
import { BakeryItemControllerBase } from "./base/bakeryItem.controller.base";

@swagger.ApiTags("bakeryItems")
@common.Controller("bakeryItems")
export class BakeryItemController extends BakeryItemControllerBase {
  constructor(protected readonly service: BakeryItemService) {
    super(service);
  }
}
