import React, { useState } from "react";
import MediaModal from "./MediaModal";

function Media({ media, likes, setLikes }) {
  const [modalShow, setModalShow] = useState(false); // State for whether modal is shown or not
  let liked = likes && likes.includes(media.title); // Checks whether media is liked or not
  const formattedDate = toDateFormat(media.date); // Formatted date of picture uploaded

  // Determine whether to show the media as an image or an iframe (video)
  let mediaElement =
    media.media_type === "image" ? (
      <img
        className="thumbnail"
        src={media.hdurl}
        alt={media.title}
        onClick={() => setModalShow(true)}
      />
    ) : (
      <img
        className="thumbnail"
        src={media.thumbnail_url}
        alt={media.title}
        onClick={() => setModalShow(true)}
      />
    );

  // Formats date to Month DD(ordinal), YYYY (e.g. May 21st, 2020)
  function toDateFormat(date) {
    const dateArray = date.split("-"); 
    const year = dateArray[0];
    let month = new Date(date);
    const day = dateArray[2];

    month = month.toLocaleString("default", { month: "long" });

    function nth(day) { // Returns ordinal suffix for day
      if (day > 3 && day < 21) {
        return "th";
      }
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    }

    return month + " " + +day + nth(day) + ", " + year;
  }

  // Makes POST or DELETE fetch requests for liking/unliking media then sets the likes state
  function onClickLike() {
    if (!liked) {
      fetch("/likes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          title: media.title,
        }),
      });

      setLikes([...likes, media.title]);
    } else {
      fetch("/likes", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          title: media.title,
        }),
      });

      setLikes(likes.filter((like) => like !== media.title));
    }
  }

  return (
    <>
      {mediaElement}
      <MediaModal
        media={media}
        liked={liked}
        onClickLike={onClickLike}
        formattedDate={formattedDate}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Media;
