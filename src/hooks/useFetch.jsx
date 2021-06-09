import { useState, useEffect } from 'react';

const useFetch = (url, queryParams) => {
  const [response, setResponse] = useState(null);
  const deps = [url, JSON.stringify(queryParams)];
  useEffect(() => {
    fetch(`${url}?${new URLSearchParams(queryParams)}`).then((res) => res.json()).then(setResponse);
  }, deps);

  return response;
};

export default useFetch;
