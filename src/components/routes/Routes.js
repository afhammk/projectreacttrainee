import React from 'react';
import {
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import { ThemeProvider,createMuiTheme } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Sidebar from '../views/sidebar/Sidebar'
import Login from '../views/no-auth/Login'
import { useSelector } from 'react-redux'
import Loader from '../common/Loader'
import { useLocation } from "react-router-dom";
import CategoriesList from '../views/auth/categories/CategoriesList';
import VendorCategoriesList from '../views/auth/vendorCategories/vendorCategoriesList';
import PurchaseOrder from '../views/auth/purchaseOrder/PurchaseOrder'

function Routes({history}) {
  const themeDefault = createMuiTheme({
    status: {
      danger: 'red',
    },
  });
  const location = useLocation();
  const { theme, loading } = useSelector((state) => state.states)
  return (
    <ThemeProvider theme={theme ? theme : themeDefault}>
      <CssBaseline/>
      <Loader openLoader = {loading}/>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Sidebar>

        <Route path="/categories/:id?">
          <CategoriesList />
        </Route>
        <Route path="/vendorcategories/">
          <VendorCategoriesList />
        </Route>
        <Route path="/newPurchaseOrder/">
          <PurchaseOrder />
        </Route>


        </Sidebar>
        </Switch>
    </ThemeProvider>
  );
}
export default withRouter(Routes);