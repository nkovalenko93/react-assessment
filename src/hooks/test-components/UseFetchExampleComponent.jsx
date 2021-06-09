import React from 'react';
import useFetch from '@hooks/useFetch';

const UseFetchExampleComponent = () => {
  const value = useFetch('/api', {});
  return (<div>{value}</div>);
};

export default UseFetchExampleComponent;
