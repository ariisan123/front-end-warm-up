import { useState } from 'react';
import axios from 'axios';

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async (url, method) => {
    try {
      setIsLoading(true);

      const data = await axios[method.toLowerCase()](url);

      if (data) {
        setData([...data.data]);
        console.log(data);
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
