import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StandardButton = styled.button`
  color: #3970a2;
  border-radius: 4px;
  font-weight: bold;
  font-size: 15px;
  padding: 10px 20px;
  min-width: 100px;
  margin: 0 5px;

  &:hover {
    cursor: pointer;
  }
`;


const PrimaryButton = styled(StandardButton)`
  background-color: #e8f4ff;
  border: 1px solid #e8f4ff;

  &:hover {
    cursor: pointer;
  }
`;


const DefaultButton = styled(StandardButton)`
  background-color: #ffffff;
  border: 1px solid #3e75a6;

  &:hover {
    cursor: pointer;
  }
`;


const Button = ({ children, type, onClick }) => {
  let ButtonComponent;
  switch (type) {
    case 'primary':
      ButtonComponent = PrimaryButton;
      break;
    // TODO add new cases here to extend types
    default:
      ButtonComponent = DefaultButton;
  }
  return (
    <ButtonComponent onClick={onClick}>
      {children}
    </ButtonComponent>
  );
};


Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired
};


Button.defaultProps = {
  type: null
};


export default Button;
