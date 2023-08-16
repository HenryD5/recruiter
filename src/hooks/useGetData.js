import { useState, useEffect } from 'react';

export const useGetData = () => {

  const URL_DE_APP_SCRIPT = 'https://script.google.com/macros/s/AKfycbykkGUq_ApkNaiMNWvM51zU_xXRBOFdeKVShFLzeXh3ntp58yW_-Y0hOKz8taS-uNxbAQ/exec'; 
  //const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState([]);

  const getData = async () => {
    //setError(null);
    //setResponseData(null);

    await fetch(URL_DE_APP_SCRIPT)
      .then((res) => res.json())
      .then((data) => {
        setResponseData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return { error, responseData };
};