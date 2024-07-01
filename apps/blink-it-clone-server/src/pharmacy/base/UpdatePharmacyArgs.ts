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
import { PharmacyWhereUniqueInput } from "./PharmacyWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PharmacyUpdateInput } from "./PharmacyUpdateInput";

@ArgsType()
class UpdatePharmacyArgs {
  @ApiProperty({
    required: true,
    type: () => PharmacyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PharmacyWhereUniqueInput)
  @Field(() => PharmacyWhereUniqueInput, { nullable: false })
  where!: PharmacyWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PharmacyUpdateInput,
  })
  @ValidateNested()
  @Type(() => PharmacyUpdateInput)
  @Field(() => PharmacyUpdateInput, { nullable: false })
  data!: PharmacyUpdateInput;
}

export { UpdatePharmacyArgs as UpdatePharmacyArgs };