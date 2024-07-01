import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GroceryService } from "./grocery.service";
import { GroceryControllerBase } from "./base/grocery.controller.base";

@swagger.ApiTags("groceries")
@common.Controller("groceries")
export class GroceryController extends GroceryControllerBase {
  constructor(protected readonly service: GroceryService) {
    super(service);
  }
}
