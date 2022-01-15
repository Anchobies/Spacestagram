import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateAdapter from '@mui/lab/AdapterDateFns';

import Home from "./Home";
import Search from "./Search";

// const API_KEY = process.env.NASA_API_KEY;

function App() {
  const [likes, setLikes] = useState([]);
  const [value, setValue] = React.useState([null, null]);

  useEffect(() => {
    fetch("/likes")
      .then((res) => res.json())
      .then((data) => setLikes(data));
  }, []);

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/search/:query" element={<Search likes={likes} value={value} setValue={setValue} />} />
          <Route exact path="/" element={<Home value={value} setValue={setValue} />} />
        </Routes>
      </BrowserRouter>
    </LocalizationProvider>
  );
}

export default App;
