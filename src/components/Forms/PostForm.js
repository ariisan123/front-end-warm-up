import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import SubmitButton from './SubmitButton';

const PostForm = ({ id }) => {
  const [body, setBody] = useState({
    title: '',
    content: '',
    category_id: 2,
    picture: 'https://via.placeholder.com/300/09f/fff.png'
  });
  const [hidden, setHidden] = useState(false);
  const handleChange = (e) => {
    setBody({ ...body, [e.target.name]: e.target.value });
  };
  return (
    <Form className="p-2">
      <Form.Group className="mt-3" hidden={hidden}>
        <Form.Control
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group hidden={hidden}>
        <Form.Control
          as="textarea"
          placeholder="Content"
          name="content"
          rows={4}
          onChange={handleChange}
        />
      </Form.Group>
      <SubmitButton body={body} setHidden={setHidden} id={id && id} />
    </Form>
  );
};

export default PostForm;
