import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PharmacyList } from "./pharmacy/PharmacyList";
import { PharmacyCreate } from "./pharmacy/PharmacyCreate";
import { PharmacyEdit } from "./pharmacy/PharmacyEdit";
import { PharmacyShow } from "./pharmacy/PharmacyShow";
import { BakeryList } from "./bakery/BakeryList";
import { BakeryCreate } from "./bakery/BakeryCreate";
import { BakeryEdit } from "./bakery/BakeryEdit";
import { BakeryShow } from "./bakery/BakeryShow";
import { GroceryList } from "./grocery/GroceryList";
import { GroceryCreate } from "./grocery/GroceryCreate";
import { GroceryEdit } from "./grocery/GroceryEdit";
import { GroceryShow } from "./grocery/GroceryShow";
import { BakeryItemList } from "./bakeryItem/BakeryItemList";
import { BakeryItemCreate } from "./bakeryItem/BakeryItemCreate";
import { BakeryItemEdit } from "./bakeryItem/BakeryItemEdit";
import { BakeryItemShow } from "./bakeryItem/BakeryItemShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"BlinkItClone"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Pharmacy"
          list={PharmacyList}
          edit={PharmacyEdit}
          create={PharmacyCreate}
          show={PharmacyShow}
        />
        <Resource
          name="Bakery"
          list={BakeryList}
          edit={BakeryEdit}
          create={BakeryCreate}
          show={BakeryShow}
        />
        <Resource
          name="Grocery"
          list={GroceryList}
          edit={GroceryEdit}
          create={GroceryCreate}
          show={GroceryShow}
        />
        <Resource
          name="BakeryItem"
          list={BakeryItemList}
          edit={BakeryItemEdit}
          create={BakeryItemCreate}
          show={BakeryItemShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
      </Admin>
    </div>
  );
};

export default App;
