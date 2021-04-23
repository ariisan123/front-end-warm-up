import { useState } from 'react';
import axios from 'axios';

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState({});

  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);

      if (response) {
        setData({ ...response });
        setIsLoading(false);
      }
    } catch (err) {
      setError(true);
      setIsLoading(false);
    }
  };

  return { isLoading, error, data, fetchData };
};

export default useFetch;
