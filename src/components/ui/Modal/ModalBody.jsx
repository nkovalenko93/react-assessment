import React from 'react';
import PropTypes from 'prop-types';

const ModalBody = ({ children }) => (<div>{children}</div>);

ModalBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default ModalBody;
