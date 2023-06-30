import { useState } from 'react';
import axios from 'axios';

export const useDataSender = () => {

  const URL_DE_APP_SCRIPT = 'https://script.google.com/macros/s/AKfycbzCHpVR2mZhLE9HOe2AXJIARIcp8lduVqiaeFs8tNR8TWFSYAQmO-_frCqS9RK-MGPOWA/exec'; 
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const headers ={
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }

  const sendData = async (data) => {
    setIsLoading(true);
    setError(null);
    setResponseData(null);

    try {
      const response = await axios.post(URL_DE_APP_SCRIPT, data);
      setResponseData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, responseData, sendData };
};

