import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GroceryServiceBase } from "./base/grocery.service.base";

@Injectable()
export class GroceryService extends GroceryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
