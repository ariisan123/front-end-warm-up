import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import PostModal from '../PostModal/PostModal';

const CreateButton = () => {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <React.Fragment>
      <Button variant="warning" className="m-1" onClick={handleModal}>
        New Post
        <i className="fas fa-edit ml-1"></i>
      </Button>

      <PostModal show={modal} setModal={handleModal} />
    </React.Fragment>
  );
};

export default CreateButton;
