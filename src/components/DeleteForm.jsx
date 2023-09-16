import React from "react";
import { Button, Modal } from "react-bootstrap";

function DeleteForm(props) {
  const { showDelete, handleCloseDelete, handleDeleteTodo } = props;

  return (
    <Modal show={showDelete} onHide={handleCloseDelete}>
      <Modal.Header className="border-0">
        <Modal.Title>Delete this todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure want to delete this todo? This action cannot be undone.
      </Modal.Body>
      <Modal.Footer className="border-0 justify-content-center column-gap-5">
        <Button variant="danger" onClick={handleDeleteTodo}>
          Delete
        </Button>
        <Button variant="secondary" onClick={handleCloseDelete}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteForm;
