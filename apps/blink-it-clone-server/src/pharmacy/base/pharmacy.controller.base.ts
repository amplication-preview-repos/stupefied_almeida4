/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PharmacyService } from "../pharmacy.service";
import { PharmacyCreateInput } from "./PharmacyCreateInput";
import { Pharmacy } from "./Pharmacy";
import { PharmacyFindManyArgs } from "./PharmacyFindManyArgs";
import { PharmacyWhereUniqueInput } from "./PharmacyWhereUniqueInput";
import { PharmacyUpdateInput } from "./PharmacyUpdateInput";

export class PharmacyControllerBase {
  constructor(protected readonly service: PharmacyService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Pharmacy })
  async createPharmacy(
    @common.Body() data: PharmacyCreateInput
  ): Promise<Pharmacy> {
    return await this.service.createPharmacy({
      data: data,
      select: {
        createdAt: true,
        description: true,
        expirationDate: true,
        id: true,
        name: true,
        price: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Pharmacy] })
  @ApiNestedQuery(PharmacyFindManyArgs)
  async pharmacies(@common.Req() request: Request): Promise<Pharmacy[]> {
    const args = plainToClass(PharmacyFindManyArgs, request.query);
    return this.service.pharmacies({
      ...args,
      select: {
        createdAt: true,
        description: true,
        expirationDate: true,
        id: true,
        name: true,
        price: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Pharmacy })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async pharmacy(
    @common.Param() params: PharmacyWhereUniqueInput
  ): Promise<Pharmacy | null> {
    const result = await this.service.pharmacy({
      where: params,
      select: {
        createdAt: true,
        description: true,
        expirationDate: true,
        id: true,
        name: true,
        price: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Pharmacy })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePharmacy(
    @common.Param() params: PharmacyWhereUniqueInput,
    @common.Body() data: PharmacyUpdateInput
  ): Promise<Pharmacy | null> {
    try {
      return await this.service.updatePharmacy({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          expirationDate: true,
          id: true,
          name: true,
          price: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Pharmacy })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePharmacy(
    @common.Param() params: PharmacyWhereUniqueInput
  ): Promise<Pharmacy | null> {
    try {
      return await this.service.deletePharmacy({
        where: params,
        select: {
          createdAt: true,
          description: true,
          expirationDate: true,
          id: true,
          name: true,
          price: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
