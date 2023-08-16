import { useState } from 'react';
//import axios from 'axios';

export const useDataSender = () => {

  const URL_DE_APP_SCRIPT = 'https://script.google.com/macros/s/AKfycbwKkf95TkZE_JhmLyA-D6bZVQAEzjkkNRzs0D4KpTwtoINbQ5EsjSzBbfjfk4cyYRMkkQ/exec'; 
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);

  function getFormData(object) {
    const formData = new FormData();
    Object.keys(object).forEach(key => formData.append(key, object[key]));
    return formData;
}

  const sendData = async (data) => {
    setError(null);
    setResponseData(null);

    const formData = getFormData(data)
    //formData.append('postData', data.cv, data.cv.name);
    //var blob = new Blob([data.cv], { type: "text/jpeg"});

    //formData.append("file", blob);

    fetch(
      URL_DE_APP_SCRIPT,
      {
        method: "POST",
        body: formData,
        /* headers: {
          'Content-Type': 'multipart/form-data; ',
        } */
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });

    /* try {
      //const response = await axios.post(URL_DE_APP_SCRIPT, data);
      //setResponseData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    } */
  };

  return { isLoading, error, responseData, sendData };
};

