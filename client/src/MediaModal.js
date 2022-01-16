import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function MediaModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="media-modal" centered>
      {props.media.media_type === "image" ? (
        <img src={props.media.hdurl} alt={props.media.title} />
      ) : (
        <iframe
          allowFullScreen
          src={props.media.url}
          title={props.media.title}
        />
      )}
      <Modal.Header closeButton>
        <Modal.Title id="media-modal">{props.media.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{props.media.explanation}</p>
      </Modal.Body>
      <Modal.Footer>
          {props.toDateFormat(props.media.date)}
        <Button onClick={props.onClickLike}>{props.liked ? "♥️" : "♡"}</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MediaModal;
