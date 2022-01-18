import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateAdapter from '@mui/lab/AdapterDateFns';

import Home from "./Home";
import Search from "./Search";

import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [likes, setLikes] = useState([]);
  const [value, setValue] = React.useState([null, null]);

  console.log("app beginning")

  // useEffect(() => {
  //   fetch("/likes/user")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("after initial fetch")
  //       setLikes(data)});
  // }, []);

  console.log("app after")

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <BrowserRouter>
        <Routes>
          <Route path="/search/:searchQuery" element={<Search likes={likes} setLikes={setLikes} value={value} setValue={setValue} />} />
          <Route exact path="/" element={<Home value={value} setValue={setValue} />} />
          <Route path="/*" element={<Home value={value} setValue={setValue} />} />
        </Routes>
      </BrowserRouter>
    </LocalizationProvider>
  );
}

export default App;
