import React, { useState } from "react";
import { Button, Form, FormControl, Modal } from "react-bootstrap";

function UpdateForm(props) {
  const { handleUpdate, handleCloseUpdate, showUpdate } = props;

  return (
    <Modal show={showUpdate} onHide={handleCloseUpdate}>
      <Modal.Header className="border-0">
        <Modal.Title>Update todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control placeholder="Enter todo ..." autoFocus />
      </Modal.Body>
      <Modal.Footer className="border-0 justify-content-center column-gap-5">
        <Button variant="primary" onClick={handleUpdate}>
          Save
        </Button>
        <Button variant="secondary" onClick={handleCloseUpdate}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UpdateForm;
