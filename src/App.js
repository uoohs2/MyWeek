import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import Detail from "./Detail";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/detail/:today">
          <Detail />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
