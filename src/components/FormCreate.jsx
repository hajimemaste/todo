import React, { useState } from "react";
import { Button, Form, FormControl, Modal } from "react-bootstrap";

function FormCreate(props) {
  const {
    handleInputChange,
    handleSubmit,
    isCheckForm,
    handleCloseCreate,
    showCreate,
  } = props;

  return (
    <Modal show={showCreate} onHide={handleCloseCreate}>
      <Modal.Header className="border-0">
        <Modal.Title>Create New todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          className={`${isCheckForm ? "border-danger" : ""}`}
          onChange={handleInputChange}
          placeholder="Enter todo ..."
          autoFocus
        />
        <Form.Text className={`${isCheckForm ? "text-danger" : "d-none"}`}>
          Please enter todo name!!
        </Form.Text>
      </Modal.Body>
      <Modal.Footer className="border-0 justify-content-center column-gap-5">
        <Button variant="primary" onClick={handleSubmit}>
          Create
        </Button>
        <Button variant="secondary" onClick={handleCloseCreate}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FormCreate;
