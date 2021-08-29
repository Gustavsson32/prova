import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Novo from "../pages/Novo";
const OtherRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/novo" component={Novo} />
      </Switch>
    </BrowserRouter>
  );
};
export default OtherRoutes;
