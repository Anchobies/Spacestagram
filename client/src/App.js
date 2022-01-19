import React from "react";

// Imports for routing with React Router
import { HashRouter, Route, Routes } from "react-router-dom";

// Import for MUI components
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateAdapter from '@mui/lab/AdapterDateFns';

import Home from "./Home";
import Search from "./Search";

import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // State for the search bar
  const [value, setValue] = React.useState([null, null]);

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <HashRouter>
        <Routes>
          <Route exact path="/search/:searchQuery" element={<Search value={value} setValue={setValue} />} />
          <Route exact path="/search" element={<Search value={value} setValue={setValue} />} />
          <Route exact path="/" element={<Home value={value} setValue={setValue} />} />
          <Route path="/*" element={<Home value={value} setValue={setValue} />} />
        </Routes>
      </HashRouter>
    </LocalizationProvider>
  );
}

export default App;
