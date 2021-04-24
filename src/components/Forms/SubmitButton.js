import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import useSubmit from '../../hooks/useSubmit';
import ErrorMsg from '../ErrorMsg/ErrorMsg';
import SuccesMsg from '../SuccessMsg/SuccesMsg';
import endpoints from '../../helpers/endpoints';

const SubmitButton = ({ body, setHidden, id }) => {
  const [disabled, setDisabled] = useState(true);
  const { submitData, error, success } = useSubmit();

  const verifyLenght = () => {
    const { title, content } = body;
    if (title.length >= 3 && content.length >= 10) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);
    setHidden(true);
    if (id) {
      submitData(endpoints.selectPost(id), 'patch', body);
    } else {
      submitData(endpoints.posts, 'post', body);
    }
  };

  useEffect(() => {
    verifyLenght();
  }, [body]);

  return (
    <React.Fragment>
      {success && <SuccesMsg>Post created!</SuccesMsg>}
      {error && <ErrorMsg>error on submit</ErrorMsg>}
      <Button onClick={handleSubmit} variant="primary" disabled={disabled}>
        Send
      </Button>
    </React.Fragment>
  );
};

export default SubmitButton;
