import { Module } from "@nestjs/common";
import { GroceryModuleBase } from "./base/grocery.module.base";
import { GroceryService } from "./grocery.service";
import { GroceryController } from "./grocery.controller";
import { GroceryResolver } from "./grocery.resolver";

@Module({
  imports: [GroceryModuleBase],
  controllers: [GroceryController],
  providers: [GroceryService, GroceryResolver],
  exports: [GroceryService],
})
export class GroceryModule {}
