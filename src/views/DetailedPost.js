import React, { useEffect } from 'react';
import { Card, Image } from 'react-bootstrap';
import { useParams } from 'react-router';
import ErrorMsg from '../components/ErrorMsg/ErrorMsg';
import Loading from '../components/Loading/Loading';
import endpoints from '../helpers/endpoints';
import useFetch from '../hooks/useFetch';

const DetailedPost = () => {
  const { id } = useParams();
  const { fetchData, isLoading, error, data } = useFetch();

  useEffect(() => {
    fetchData(endpoints.selectPost(id));
  }, []);
  console.log(data);
  return (
    <Card className="w-75 container p-5 mt-5">
      {error && <ErrorMsg>404 Post not found</ErrorMsg>}
      {isLoading && <Loading />}
      {!isLoading && data && !error && (
        <React.Fragment>
          <Card.Title className="px-4 mt-4 h1">
            {data.data.data.title}
          </Card.Title>
          <Card.Body>
            <p>{data.data.data.content}</p>
            <Image src={data.data.data.picture} />
          </Card.Body>
        </React.Fragment>
      )}
    </Card>
  );
};

export default DetailedPost;
