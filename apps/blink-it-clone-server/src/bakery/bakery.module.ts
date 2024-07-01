import { Module } from "@nestjs/common";
import { BakeryModuleBase } from "./base/bakery.module.base";
import { BakeryService } from "./bakery.service";
import { BakeryController } from "./bakery.controller";
import { BakeryResolver } from "./bakery.resolver";

@Module({
  imports: [BakeryModuleBase],
  controllers: [BakeryController],
  providers: [BakeryService, BakeryResolver],
  exports: [BakeryService],
})
export class BakeryModule {}
