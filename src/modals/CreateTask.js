import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreateTask = ({ modal, toogle }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Modal isOpen={modal} toggle={toogle}>
      <ModalHeader toggle={toogle}>Create Task</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Task Name</label>
            <input type="text" className="form-control" value={taskName} />
          </div>
          <br />
          <div className="form-group">
            <label>Description</label>
            <textarea
              rows="5"
              className="form-control"
              value={description}
            ></textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toogle}>
          Create
        </Button>{" "}
        <Button color="secondary" onClick={toogle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTask;
