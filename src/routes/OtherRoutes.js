import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home/index";
import Novo from "../pages/Novo";
import Listar from "../pages/Home/listar";
const OtherRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/listar" component={Listar} />
        <Route path="/novo" component={Novo} />
      </Switch>
    </BrowserRouter>
  );
};
export default OtherRoutes;
