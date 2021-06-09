import React from 'react';
import PropTypes from 'prop-types';

const ModalFooter = ({ children }) => (<div>{children}</div>);

ModalFooter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default ModalFooter;
