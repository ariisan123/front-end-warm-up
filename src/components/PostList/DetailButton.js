import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const DetailButton = ({ id }) => {
  const history = useHistory();
  const handleDetail = () => {
    history.push(`/posts/${id}`);
  };
  return (
    <Button size="sm" onClick={handleDetail}>
      Details
    </Button>
  );
};

export default DetailButton;
