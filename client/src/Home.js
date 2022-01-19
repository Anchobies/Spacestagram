import React from "react";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

function Home({ value, setValue }) {
  const navigate = useNavigate();

  if (window.location.pathname !== "/") {
    navigate("/");
  }

  function handleSearch(query) {
    if (query === "random") {
      navigate(`/search/random`);
    } else {
      navigate(`/search/${query}`);
    }
  }

  return (
    <header className="header">
      <h1
        onClick={() => {
          setValue([null, null]);
          navigate("/");
        }}
      >
        Spacestagram
      </h1>
      <h2>
        Search through NASA's{" "}
        <a
          href="https://apod.nasa.gov/apod/astropix.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          APOD
        </a>
      </h2>
      <SearchBar
        value={value}
        setValue={setValue}
        handleSearch={handleSearch}
      />
    </header>
  );
}

export default Home;
