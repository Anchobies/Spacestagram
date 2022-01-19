import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";

function MediaModal(props) {
  return (
    // Modal window that contains the media and media content
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
          <div className="modal-top">
            <div className="modal-header">
              <h2 className="media-title">{props.media.title}</h2>
              <button onClick={props.onHide}>&#x2715;</button>
            </div>
            <hr className="modal-line" />
          </div>
          <div className="modal-middle">
            <p className="media-explanation">{props.media.explanation}</p>
          </div>
          <div className="modal-bottom">
            <hr className="modal-line" />
            <p className="media-date">{props.formattedDate}</p>
            <Button
              sx={{
                fontFamily: "arial",
                fontSize: "1rem",
                color: "white !important",
                backgroundColor: "rgb(10,59,140)",
                "&:hover": {
                  backgroundColor: "rgb(10,59,140)",
                  opacity: 0.5,
                },
                width: "100%",
                borderRadius: "0",
                border: "none",
                boxShadow: "none",
              }}
              onClick={props.onClickLike}
            >
              {props.liked ? "♥️" : "♡"}
            </Button>
          </div>
        </section>
      </div>
    </Modal>
  );
}

export default MediaModal;
