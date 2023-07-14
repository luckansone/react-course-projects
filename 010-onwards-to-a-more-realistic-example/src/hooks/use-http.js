import React, { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    let data = null;
    try {
      const response = await fetch(requestConfig.url,
        {
            method: requestConfig.method ? requestConfig.method : 'GET',
            body: requestConfig.body ? requestConfig.body: null,
            headers: requestConfig.headers ? requestConfig.headers: {}
        });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return {sendRequest, isLoading, error};
};

export default useHttp;
