import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import DeleteModal from '../DeleteModal/DeleteModal';

const DeleteButton = ({ id }) => {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <React.Fragment>
      <Button variant="danger" size="sm" onClick={handleModal}>
        Delete
        <i className="fas fa-trash ml-1"></i>
      </Button>

      <DeleteModal setModal={handleModal} show={modal} id={id} />
    </React.Fragment>
  );
};

export default DeleteButton;
