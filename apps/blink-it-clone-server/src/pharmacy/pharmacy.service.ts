import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PharmacyServiceBase } from "./base/pharmacy.service.base";

@Injectable()
export class PharmacyService extends PharmacyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
