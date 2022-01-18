import React from "react";

import TextField from "@mui/material/TextField";
import DateRangePicker from "@mui/lab/DateRangePicker";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function SearchBar({ value, setValue, handleSearch }) {
  const minDate = new Date("1995-06-16");

  function dateToString(date) {
    const newDate = date.toISOString().split("T")[0];
    return newDate;
  }

  return (
    <div className="search-bar">
      <DateRangePicker
        startText="Start Date"
        endText="End Date"
        disableFuture
        minDate={minDate}
        value={value}
        calendars={2}
        allowSameDateSelection
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField size="small" sx={{
              backgroundColor: "white",
              borderRadius: "2rem"
            }} {...startProps} />
            <Box sx={{ 
              mx: 2,
              color: "white" }}> to </Box>
            <TextField size="small" sx={{
              backgroundColor: "white",
              borderRadius: "2rem"
            }} {...endProps} />
          </React.Fragment>
        )}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className="search-buttons">
      <Button
        size="small"
        variant="contained"
        sx={{
          fontSize: "1rem",
          textTransform: "none",
          borderRadius: "0",
          fontFamily: "arial",
          backgroundColor: "rgb(10,59,140)",
          "&:hover": {
            backgroundColor: "royalblue"
          }
        }}
        onClick={() => {
          let searchQuery = "";

          if (value[0] && value[1]) {
            searchQuery =
              +value[0] === +value[1]
                ? dateToString(value[0])
                : dateToString(value[0]) + "to" + dateToString(value[1]);
          }

          handleSearch(searchQuery);
        }}
      >
        Search
      </Button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button
        size="small"
        color="secondary"
        variant="contained"
        sx={{
          fontSize: "1rem",
          textTransform: "none",
          borderRadius: "0",
          fontFamily: "arial",
          backgroundColor: "rgb(237,60,51)",
          "&:hover": {
            backgroundColor: "lightcoral"
          }
        }}
        onClick={() => handleSearch("random")}
      >
        Generate 10 random
      </Button>
      </div>
    </div>
  );
}

export default SearchBar;
