import React from "react";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

import GithubIcon from "./273178_github_icon.png";

function Home({ value, setValue }) {
  const navigate = useNavigate();

  // When the user navigates to the Home page, the url is reset to root
  if (window.location.pathname !== "/") {
    navigate("/");
  }

  /* Navigate user to Home or Search page depending on the button pressed. 
  This function is passed as prop to SearchBar component. */
  function handleSearch(query) {
    if (query === "random") {
      navigate(`/search/random`);
    } else {
      navigate(`/search/${query}`);
    }
  }

  return (
    <>
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
      <footer>
        <a
          href="https://github.com/Anchobies/Spacestagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GithubIcon} alt="Github Icon" />
        </a>
      </footer>
    </>
  );
}

export default Home;
