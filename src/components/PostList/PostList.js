import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import PostItem from './PostItem';
import useFetch from '../../hooks/useFetch';
import endpoints from '../../helpers/endpoints';
import Loading from '../Loading/Loading';

const PostList = () => {
  const { fetchData, isLoading, data } = useFetch();

  useEffect(() => {
    fetchData(endpoints.posts);
  }, []);

  return (
    <Container fluid>
      {isLoading ? (
        <Loading />
      ) : (
        <Row>
          {data.data.map((item) => (
            <PostItem id={item.id} title={item.title} key={item.id} />
          ))}
        </Row>
      )}
    </Container>
  );
};

export default PostList;
