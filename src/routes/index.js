import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Imprimnir from "../pages/imprimir";
import Home from "../pages/Home";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/imprimir" component={Imprimnir} />
      </Switch>
    </Router>
  );
}
