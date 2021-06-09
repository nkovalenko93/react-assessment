import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaExclamationTriangle } from 'react-icons/fa';
import './ModalTitle.css';


const ModalTitleStyledComponent = styled.div`
  font-weight: bold;
  font-size: 20px;
  border-bottom: 1px solid lightgray;
  margin: 0 0 15px 0;
  line-height: 30px;
`;


const ModalTitle = ({ children }) => (
  <ModalTitleStyledComponent>
    <FaExclamationTriangle className="warning-icon" />
    <span>{children}</span>
  </ModalTitleStyledComponent>
);


ModalTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};


export default ModalTitle;
