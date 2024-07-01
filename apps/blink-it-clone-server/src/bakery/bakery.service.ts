import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BakeryServiceBase } from "./base/bakery.service.base";

@Injectable()
export class BakeryService extends BakeryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
