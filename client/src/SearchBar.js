import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import DateRangePicker from "@mui/lab/DateRangePicker";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function SearchBar({ value, setValue, handleSearch }) {
  const minDate = new Date("1995-06-16");
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  function dateToString(date) {
    const newDate = date.toISOString().split("T")[0];
    return newDate;
  }

  return (
    <div className="search-bar">
      <h3
        onClick={() => {
          setValue([null, null]);
          navigate("/");
        }}
      >
        Spacestagram
      </h3>
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
            <TextField
              size="small"
              sx={{
                backgroundColor: "white",
                borderRadius: "2rem",
              }}
              {...startProps}
            />
            <Box
              sx={{
                mx: 2,
                color: "white",
              }}
            >
              {" "}
              to{" "}
            </Box>
            <TextField
              size="small"
              sx={{
                backgroundColor: "white",
                borderRadius: "2rem",
              }}
              {...endProps}
            />
          </React.Fragment>
        )}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;
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
              backgroundColor: "rgb(10,59,140)",
              opacity: 0.5,
            },
          }}
          onClick={() => {
            if (
              value[0] &&
              value[1] &&
              Date.parse(value[0]) &&
              Date.parse(value[1])
            ) {
              const searchQuery =
                +value[0] === +value[1]
                  ? dateToString(value[0])
                  : dateToString(value[0]) + "to" + dateToString(value[1]);

              if (isError) {
                setIsError(false);
              }
              handleSearch(searchQuery);
            } else {
              setIsError(true);
            }
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
              backgroundColor: "rgb(237,60,51)",
              opacity: 0.5,
            },
          }}
          onClick={() => {
            if (isError) {
              setIsError(false);
            }
            handleSearch("random");
          }}
        >
          Generate 10 random
        </Button>
      </div>
      {isError ? (
        <h4 className="error-message">Please enter a valid date range</h4>
      ) : null}
    </div>
  );
}

export default SearchBar;
