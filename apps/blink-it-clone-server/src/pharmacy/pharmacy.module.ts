import { Module } from "@nestjs/common";
import { PharmacyModuleBase } from "./base/pharmacy.module.base";
import { PharmacyService } from "./pharmacy.service";
import { PharmacyController } from "./pharmacy.controller";
import { PharmacyResolver } from "./pharmacy.resolver";

@Module({
  imports: [PharmacyModuleBase],
  controllers: [PharmacyController],
  providers: [PharmacyService, PharmacyResolver],
  exports: [PharmacyService],
})
export class PharmacyModule {}
