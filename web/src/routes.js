import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import FaleMais from "./pages/FaleMais";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={FaleMais} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
