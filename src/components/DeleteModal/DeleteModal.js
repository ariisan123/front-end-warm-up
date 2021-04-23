import React, { useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import endpoints from '../../helpers/endpoints';
import Loading from '../Loading/Loading';
import ErrorMsg from '../ErrorMsg/ErrorMsg';
import SuccesMsg from '../SuccessMsg/SuccesMsg';
import useSubmit from '../../hooks/useSubmit';

const DeleteModal = ({ setModal, show, id }) => {
  const { submitData, success, error, isLoading } = useSubmit();
  const handleDelete = async () => {
    await submitData(endpoints.selectPost(id), 'DELETE');
  };
  return (
    <Modal animation={true} show={show} onHide={setModal}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="h5">Do you want to delete this post?</p>
        {isLoading && <Loading />}
        {error && (
          <ErrorMsg>An error has occurred, please try again later...</ErrorMsg>
        )}
        {success && <SuccesMsg>Deleted complete!</SuccesMsg>}
      </Modal.Body>

      {!error && !success && (
        <Modal.Footer>
          <Button variant="danger" onClick={handleDelete}>
            Yes
          </Button>
          <Button variant="info" onClick={setModal}>
            No
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default DeleteModal;
