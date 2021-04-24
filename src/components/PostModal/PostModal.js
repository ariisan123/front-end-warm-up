import React from 'react';
import { Modal } from 'react-bootstrap';
import PostForm from '../Forms/PostForm';

const PostModal = ({ setModal, show, id }) => {
  return (
    <Modal animation={true} show={show} onHide={setModal}>
      <Modal.Header closeButton>
        <Modal.Title>New Post</Modal.Title>
      </Modal.Header>
      <PostForm id={id && id} />
    </Modal>
  );
};

export default PostModal;
