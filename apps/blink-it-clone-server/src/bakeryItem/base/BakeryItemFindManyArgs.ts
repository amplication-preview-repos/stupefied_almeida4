/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BakeryItemWhereInput } from "./BakeryItemWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BakeryItemOrderByInput } from "./BakeryItemOrderByInput";

@ArgsType()
class BakeryItemFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BakeryItemWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BakeryItemWhereInput, { nullable: true })
  @Type(() => BakeryItemWhereInput)
  where?: BakeryItemWhereInput;

  @ApiProperty({
    required: false,
    type: [BakeryItemOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BakeryItemOrderByInput], { nullable: true })
  @Type(() => BakeryItemOrderByInput)
  orderBy?: Array<BakeryItemOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BakeryItemFindManyArgs as BakeryItemFindManyArgs };
