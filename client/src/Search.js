import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import SearchBar from "./SearchBar";
import Media from "./Media";

function Search({ value, setValue }) {
  const [likes, setLikes] = useState(null); // State for array of title of media liked by user
  const { searchQuery } = useParams(); // Get the search query from the url
  const [media, setMedia] = useState(null); // State for array of media returned from API
  const navigate = useNavigate();
  const API_KEY = "98eebngRUNIDe1ZLPU6BkFUSYN3UWt7HdLekOegl";

  let mediaMap = null;

  // Media component for each media returned from API
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

  // Checks if fetch is successful. If not, error is thrown and later caught.
  function handleError(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
      return response.json();
    }
  }

  // Depending on the search query, fetch media from the API and set the media state
  function handleSearch(query) {
    if (!query) {
      navigate("/"); // If no query in the url, navigate to Home page
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

  /* When the Search component initially mounts, fetch media from the API through the url search query parameters
  and also fetch the user's likes information */
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
    <main className="search">
        <SearchBar
          value={value}
          setValue={setValue}
          handleSearch={handleSearch}
        />
      <section className="media-container">{mediaMap}</section>
    </main>
  );
}

export default Search;
