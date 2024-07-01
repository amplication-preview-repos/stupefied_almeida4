import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const OrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ContactDetails" source="contactDetails" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="CustomerName" source="customerName" />
        <TextField label="ID" source="id" />
        <TextField label="MedsRequired" source="medsRequired" />
        <TextField label="OrderDate" source="orderDate" />
        <TextField label="PrescriptionImage" source="prescriptionImage" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
