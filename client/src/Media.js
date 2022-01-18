import React, { useState } from "react";
import MediaModal from "./MediaModal";
import Button from "react-bootstrap/Button";

function Media({ media, likes, setLikes }) {
  const [modalShow, setModalShow] = useState(false);
  let liked = likes && likes.includes(media.title);
  const formattedDate = toDateFormat(media.date);

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

  function toDateFormat(date) {
    const dateArray = date.split("-");
    const year = dateArray[0];
    let month = new Date(date);
    const day = dateArray[2];

    month = month.toLocaleString("default", { month: "long" });

    function nth(day) {
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
