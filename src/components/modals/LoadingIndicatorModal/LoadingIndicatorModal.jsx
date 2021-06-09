import React from 'react';
import PropTypes from 'prop-types';
import LoadingIndicator from '@components/ui/LoadingIndicator';
import { Modal, ModalBody } from '@components/ui/Modal';

import './LoadingIndicatorModal.css';


const LoadingIndicatorModal = ({ show, onClose }) => (
  <Modal show={show} onClose={onClose}>
    <ModalBody>
      <div className="loading-indicator-container">
        <LoadingIndicator />
        <div className="loading-indicator-text">
          Data is loading
        </div>
      </div>
    </ModalBody>
  </Modal>
);


LoadingIndicatorModal.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func.isRequired
};


LoadingIndicatorModal.defaultProps = {
  show: false
};


export default LoadingIndicatorModal;
