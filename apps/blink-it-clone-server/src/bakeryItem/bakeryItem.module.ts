import { Module } from "@nestjs/common";
import { BakeryItemModuleBase } from "./base/bakeryItem.module.base";
import { BakeryItemService } from "./bakeryItem.service";
import { BakeryItemController } from "./bakeryItem.controller";
import { BakeryItemResolver } from "./bakeryItem.resolver";

@Module({
  imports: [BakeryItemModuleBase],
  controllers: [BakeryItemController],
  providers: [BakeryItemService, BakeryItemResolver],
  exports: [BakeryItemService],
})
export class BakeryItemModule {}
