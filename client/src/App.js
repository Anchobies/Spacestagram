import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Home";
import Search from "./Search";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/search/:query">
        <Search />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </BrowserRouter>
  );
}

export default App;
