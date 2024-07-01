/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GroceryWhereInput } from "./GroceryWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class GroceryListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => GroceryWhereInput,
  })
  @ValidateNested()
  @Type(() => GroceryWhereInput)
  @IsOptional()
  @Field(() => GroceryWhereInput, {
    nullable: true,
  })
  every?: GroceryWhereInput;

  @ApiProperty({
    required: false,
    type: () => GroceryWhereInput,
  })
  @ValidateNested()
  @Type(() => GroceryWhereInput)
  @IsOptional()
  @Field(() => GroceryWhereInput, {
    nullable: true,
  })
  some?: GroceryWhereInput;

  @ApiProperty({
    required: false,
    type: () => GroceryWhereInput,
  })
  @ValidateNested()
  @Type(() => GroceryWhereInput)
  @IsOptional()
  @Field(() => GroceryWhereInput, {
    nullable: true,
  })
  none?: GroceryWhereInput;
}
export { GroceryListRelationFilter as GroceryListRelationFilter };