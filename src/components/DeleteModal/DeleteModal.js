import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import endpoints from '../../helpers/endpoints';
import useFetch from '../../hooks/useFetch';
import Loading from '../Loading/Loading';
import ErrorMsg from '../ErrorMsg/ErrorMsg';
import SuccesMsg from '../SuccessMsg/SuccesMsg';

const DeleteModal = ({ setModal, show, id }) => {
  const { fetchData, data, error, isLoading } = useFetch();
  const handleDelete = async () => {
    await fetchData(endpoints.selectPost(id), 'DELETE');
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
        {data.length > 1 && <SuccesMsg>Deleted complete!</SuccesMsg>}
      </Modal.Body>

      {(!error || !data) && (
        <Modal.Footer>
          <Button variant="danger" onClick={handleDelete}>
            Yes
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default DeleteModal;
