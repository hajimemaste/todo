import React, { useState } from "react";
import { Button, Form, FormControl, Modal } from "react-bootstrap";

function UpdateForm(props) {
  const {
    handleUpdate,
    handleCloseUpdate,
    showUpdate,
    handleInputChange,
    isCheckForm,
    inputValue,
  } = props;

  return (
    <Modal show={showUpdate} onHide={handleCloseUpdate}>
      <Modal.Header className="border-0">
        <Modal.Title>Update todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          className={`${isCheckForm ? "border-danger" : ""}`}
          placeholder="Enter todo ..."
          autoFocus
          onChange={handleInputChange}
          value={inputValue}
        />
        <Form.Text className={`${isCheckForm ? "text-danger" : "d-none"}`}>
          Please enter todo name!!
        </Form.Text>
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
