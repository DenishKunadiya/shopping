import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component";
import SignInAnSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CustomButton from "./components/custom-button/custom-button.component";
const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAnSignUpPage} />
      </Switch>
      </BrowserRouter>
  );
};
export default App;
 