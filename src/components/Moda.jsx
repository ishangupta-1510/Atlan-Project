import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Moda({ show, value, setShow }) {
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>ERROR!</Modal.Title>
        </Modal.Header>
        {value === "" ? (
          <Modal.Body>Enter some value in the input box</Modal.Body>
        ) : (
          <Modal.Body>Enter value from available queries</Modal.Body>
        )}

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Moda;
