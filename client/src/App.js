import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Search from "./Search";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/search/:query">
          <Search />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
