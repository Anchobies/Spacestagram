import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import SearchBar from "./SearchBar";
import Media from "./Media";

function Search({ value, setValue }) {
  const [likes, setLikes] = useState(null);
  const { searchQuery } = useParams();
  const [media, setMedia] = useState(null);
  const navigate = useNavigate();
  const API_KEY = "98eebngRUNIDe1ZLPU6BkFUSYN3UWt7HdLekOegl";

  function handleSearch(query) {
    if (!query) {
      navigate("/");
    } else if (query === "random") {
      navigate(`/search/random`);
      fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=10&thumbs=true`
      )
        .then((res) => res.json())
        .then((data) => setMedia(data));
    } else {
      navigate(`/search/${query}`);
      const dates = query.split("to");
      if (dates.length === 1) {
        fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${query}&thumbs=true`
        )
          .then(handleError)
          .then((data) => setMedia([data]))
          .catch((err) => setMedia([]));
      } else {
        fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${dates[0]}&end_date=${dates[1]}&thumbs=true`
        )
          .then(handleError)
          .then((data) => setMedia(data))
          .catch((err) => setMedia([]));
      }
    }
  }

  function handleError(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
      return response.json();
    }
  }

  let mediaMap = null;

  if (media) {
    mediaMap = media.map((element) => (
      <Media
        key={element.date}
        media={element}
        likes={likes}
        setLikes={setLikes}
      />
    ));
  }

  if (media && media.length === 0) {
    mediaMap = <h3 className="no-media">No results found</h3>;
  }

  useEffect(() => {
    if (!media) {
      handleSearch(searchQuery);
    }

    if (!likes) {
      fetch("/likes/user")
        .then((res) => res.json())
        .then((data) => {
          setLikes(data);
        });
    }
  }, []);

  return (
    <header className="search">
      <div className="search-top">
        <h3 onClick={() => navigate("/")}>Spacestagram</h3>
        <SearchBar
          value={value}
          setValue={setValue}
          handleSearch={handleSearch}
        />
      </div>
      <div className="media-container">{mediaMap}</div>
    </header>
  );
}

export default Search;
