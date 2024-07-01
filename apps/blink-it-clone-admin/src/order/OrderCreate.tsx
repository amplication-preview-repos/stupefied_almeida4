import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="ContactDetails" source="contactDetails" />
        <TextInput label="CustomerName" source="customerName" />
        <TextInput label="MedsRequired" multiline source="medsRequired" />
        <DateTimeInput label="OrderDate" source="orderDate" />
        <div />
      </SimpleForm>
    </Create>
  );
};
