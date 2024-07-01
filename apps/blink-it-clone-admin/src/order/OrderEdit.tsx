import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="ContactDetails" source="contactDetails" />
        <TextInput label="CustomerName" source="customerName" />
        <TextInput label="MedsRequired" multiline source="medsRequired" />
        <DateTimeInput label="OrderDate" source="orderDate" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
