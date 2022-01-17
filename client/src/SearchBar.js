import React from "react";

import TextField from "@mui/material/TextField";
import DateRangePicker from "@mui/lab/DateRangePicker";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function SearchBar({ value, setValue, handleSearch }) {
  const minDate = new Date("1995-06-16");
  let searchQuery = "";

  function dateToString(date) {
    const newDate = date.toISOString().split("T")[0];
    return newDate;
  }

  if (value[0] && value[1]) {
    searchQuery =
      +value[0] === +value[1]
        ? dateToString(value[0])
        : dateToString(value[0]) + "to" + dateToString(value[1]);
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
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
      <Button
        size="large"
        variant="contained"
        onClick={() => {
          handleSearch(searchQuery);
        }}
      >
        Search
      </Button>
      <Button
        size="large"
        color="secondary"
        variant="contained"
        onClick={() => handleSearch("random")}
      >
        Generate 10 random
      </Button>
    </div>
  );
}

export default SearchBar;
