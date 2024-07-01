import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BakeryItemServiceBase } from "./base/bakeryItem.service.base";

@Injectable()
export class BakeryItemService extends BakeryItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
