import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import PostItem from './PostItem';
import useFetch from '../../hooks/useFetch';
import endpoints from '../../helpers/endpoints';
import Loading from '../Loading/Loading';
import axios from 'axios';

const PostList = () => {
  const { fetchData, isLoading, data } = useFetch();

  useEffect(() => {
    //fetchData(endpoints.posts, 'GET');
    (async () => {
      const data = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      console.log(data);
    })();
    //fetch('https://jsonplaceholder.typicode.com/posts', {
    //mode: 'no-cors'
    //})
    //.then((res) => res.json())
    //.then((data) => console.log(data))
    //.catch((err) => console.log(err));
  }, []);

  return (
    <Container fluid>
      {isLoading ? (
        <Loading />
      ) : (
        <Row>
          {data.map((item) => (
            <PostItem id={item.id} title={item.title} key={item.id} />
          ))}
        </Row>
      )}
    </Container>
  );
};

export default PostList;
