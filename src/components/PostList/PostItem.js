import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import DetailButton from './DetailButton';

const PostItem = ({ id, title }) => {
  const capitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  };
  return (
    <Card style={{ width: '100%' }} border="secondary" className="m-3 mx-xl-5">
      <Card.Body>
        <Card.Title>{capitalize(title)}</Card.Title>
        <DetailButton />
        <EditButton id={id} />
        <DeleteButton id={id} />
      </Card.Body>
    </Card>
  );
};

export default PostItem;
