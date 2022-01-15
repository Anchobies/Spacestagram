import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Search from "./Search";

// const API_KEY = process.env.NASA_API_KEY;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/search/:query" element={<Search />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
