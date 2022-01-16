import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import { useParams, useNavigate } from "react-router-dom";

function Search({ likes, setLikes, value, setValue }) {
  const { searchQuery } = useParams();
  const [media, setMedia] = useState([]);
  const navigate = useNavigate();
  // const API_KEY = process.env.NASA_API_KEY;
  const API_KEY = "98eebngRUNIDe1ZLPU6BkFUSYN3UWt7HdLekOegl";

  function handleSearch(query) {
    if (query === "random") {
      navigate(`/search/random`);
      fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=10`)
        .then((res) => res.json())
        .then((data) => setMedia(data));
    } else {
      navigate(`/search/${query}`);
      const dates = query.split("to");
      if (dates.length === 1) {
        fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${query}`
        )
          .then((res) => res.json())
          .then((data) => setMedia([data]));
      } else {
        fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${dates[0]}&end_date=${dates[1]}`
        )
          .then((res) => res.json())
          .then((data) => setMedia(data));
      }
    }
  }

  const mediaMap = media.map((element) => {
    const mediaElement =
      element.media_type === "image" ? (
        <img src={element.hdurl} alt={element.title} key={element.title} />
      ) : (
        <iframe allowFullScreen src={element.url} key={element.title} />   
      );

    return mediaElement;
  });

  useEffect(() => handleSearch(searchQuery), []);

  return (
    <section>
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
