import React from 'react';
import { Alert } from 'react-bootstrap';

const ErrorMsg = ({ children }) => {
  return (
    <Alert variant="danger">
      <Alert.Heading>Ups...</Alert.Heading>
      <p>{children}</p>
    </Alert>
  );
};

export default ErrorMsg;
