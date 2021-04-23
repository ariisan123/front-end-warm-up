import { useState } from 'react';
import axios from 'axios';

const useSubmit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState({});

  const submitData = async (url, method, body = null) => {
    setIsLoading(true);
    try {
      const response = await axios[method.toLowerCase()](url, body);

      if (response) {
        setData({ ...response });
        setSuccess(true);
        setIsLoading(false);
      }
    } catch (err) {
      setError(true);
      setSuccess(false);
      setIsLoading(false);
    }
  };

  return { isLoading, error, data, submitData, success };
};

export default useSubmit;
