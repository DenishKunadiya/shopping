import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component";

const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
      </BrowserRouter>
  );
};
export default App;
