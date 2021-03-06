import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Modals = ({ isShown, setIsShown, ModalTitle, ModalBody }) => {
  const handleClose = () => {
    setIsShown({ isShown: false, ModalTitle, ModalBody });
  };

  return (
    <Modal show={isShown} onHide={handleClose} backdrop="static">
      <Modal.Header
        closeButton
        style={{
          backgroundColor: "#6495ED",
          color: "white",
          textShadow: "2px 2px black",
        }}
      >
        <Modal.Title>{ModalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ fontWeight: "bold" }}>{ModalBody}</Modal.Body>
      <Modal.Footer>
        <Button
          style={{
            backgroundColor: "#6495ED",
            color: "white",
            fontWeight: "bold",
          }}
          onClick={handleClose}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default Modals;
