import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";

function MediaModal(props) {
  return (
    <Modal {...props} size="xl" aria-labelledby="media-modal" centered>
      <div className="modal-window">
        {props.media.media_type === "image" ? (
          <img
            src={props.media.hdurl}
            alt={props.media.title}
            className="modal-media"
          />
        ) : (
          <iframe
            allowFullScreen
            className="modal-media"
            src={props.media.url}
            title={props.media.title}
          />
        )}
        <section className="modal-content">
          <div className="modal-info">
            <h2 className="media-title">{props.media.title}</h2>
            <hr className="modal-line"/>
            <p className="media-explanation">{props.media.explanation}</p>
          </div>
            <hr className="modal-line"/>
          <p className="media-date">{props.formattedDate}</p>
          <Button sx={{
            fontFamily: "arial",
            fontSize: "1rem",
            color: "white",
            backgroundColor: "rgb(10,59,140)",
            "&:hover": {
              backgroundColor: "royalblue"
            },
          }} onClick={props.onClickLike}>
            {props.liked ? "♥️" : "♡"}
          </Button>
        </section>
      </div>
    </Modal>
  );
}

export default MediaModal;
