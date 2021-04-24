import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import PostModal from '../PostModal/PostModal';

const EditButton = ({ id }) => {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <React.Fragment>
      <Button variant="warning" className="m-1" size="sm" onClick={handleModal}>
        Edit
        <i className="fas fa-edit ml-1"></i>
      </Button>
      <PostModal show={modal} setModal={handleModal} id={id} />
    </React.Fragment>
  );
};

export default EditButton;
