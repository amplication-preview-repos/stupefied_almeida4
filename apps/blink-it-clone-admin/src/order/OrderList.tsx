import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const OrderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Orders"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ContactDetails" source="contactDetails" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="CustomerName" source="customerName" />
        <TextField label="ID" source="id" />
        <TextField label="MedsRequired" source="medsRequired" />
        <TextField label="OrderDate" source="orderDate" />
        <TextField label="PrescriptionImage" source="prescriptionImage" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
