import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useDebounce from '@hooks/useDebounce';


const UseDebounceExampleComponent = ({ timeout }) => {
  const [value, setValue] = useState('initial');
  const debouncedValue = useDebounce(value, timeout);
  useEffect(() => {
    setValue('final');
  }, []);
  return (<div>{debouncedValue}</div>);
};


UseDebounceExampleComponent.propTypes = {
  timeout: PropTypes.number.isRequired
};


export default UseDebounceExampleComponent;
