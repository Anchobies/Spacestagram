import React from "react";

import TextField from "@mui/material/TextField";
import DateRangePicker from "@mui/lab/DateRangePicker";
import Box from "@mui/material/Box";

function SearchBar( { value, setValue } ) {
  const minDate = new Date("1995-06-16");

  return (
    <>
      <DateRangePicker
        startText="Start Date"
        endText="End Date"
        disableFuture
        minDate={minDate}
        value={value}
        calendars={2}
        allowSameDateSelection
        disableCloseOnSelect={true}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
            <Box sx={{ mx: 2 }}> or </Box>
          </React.Fragment>
        )}
      />
    </>
  );
}

export default SearchBar;
