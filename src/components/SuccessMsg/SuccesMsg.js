import React from 'react';
import { Alert } from 'react-bootstrap';

const SuccesMsg = ({ children }) => {
  return (
    <Alert variant="success">
      <Alert.Heading>Success</Alert.Heading>
      <p>{children}</p>
    </Alert>
  );
};

export default SuccesMsg;
