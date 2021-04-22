import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <Container className="mt-5" style={{ textAlign: 'center' }}>
      <Spinner
        animation="border"
        role="status"
        variant="primary"
        style={{ width: '5rem', height: '5rem', textAlign: 'center' }}
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
    </Container>
  );
};

export default Loading;
