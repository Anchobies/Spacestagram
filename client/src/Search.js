import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import SearchBar from "./SearchBar";
import Media from "./Media";

function Search({ likes, setLikes, value, setValue }) {
  const { searchQuery } = useParams();
  const [media, setMedia] = useState([]);
  const navigate = useNavigate();
  const API_KEY = "98eebngRUNIDe1ZLPU6BkFUSYN3UWt7HdLekOegl";

  function handleSearch(query) {
    if (!query) {
      navigate("/");
    } else if (query === "random") {
      navigate(`/search/random`);
      fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=10&thumbs=true`)
        .then((res) => res.json())
        .then((data) => setMedia(data));
    } else {
      navigate(`/search/${query}`);
      const dates = query.split("to");
      if (dates.length === 1) {
        fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${query}&thumbs=true`
        )
          .then((res) => res.json())
          .then((data) => setMedia([data]));
      } else {
        fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${dates[0]}&end_date=${dates[1]}&thumbs=true`
        )
          .then((res) => res.json())
          .then((data) => setMedia(data));
      }
    }
  }

  const mediaMap = media.map((element) => (
    <Media
      key={element.date}
      media={element}
      likes={likes}
      setLikes={setLikes}
      alone={media.length === 1}
    />
  ));

  useEffect(() => {
    handleSearch(searchQuery);
  }, []);

  return (
    <section className="search">
      <SearchBar
        value={value}
        setValue={setValue}
        handleSearch={handleSearch}
      />
      <div className="media-container">{mediaMap}</div>
    </section>
  );
}

export default Search;
