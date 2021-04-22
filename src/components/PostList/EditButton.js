import React from 'react';
import Button from 'react-bootstrap/Button';

const EditButton = ({ id }) => {
  return (
    <Button variant="warning" className="m-1" size="sm">
      Edit
      <i className="fas fa-edit ml-1"></i>
    </Button>
  );
};

export default EditButton;
