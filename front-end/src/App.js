import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import './App.css';
import Register from './pages/Register';
import CustomerProducts from './pages/CustomerProducts';
import SellerOrders from './pages/SellerOrders';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/customer/products" component={ CustomerProducts } />
        <Route exact path="/seller/orders" component={ SellerOrders } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
