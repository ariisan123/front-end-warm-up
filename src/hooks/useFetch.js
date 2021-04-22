import { useState } from 'react';

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async (url, method) => {
    try {
      setIsLoading(true);
      const response = await fetch(url, { method });
      const value = await response.json();
      if (value) {
        setData([...value]);
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
