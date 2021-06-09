import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const ModalWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .15);
`;


const ModalStyledComponent = styled.div`
  min-width: 600px;
  padding: 20px;
  border: 1px solid #d0021b;
  border-radius: 15px;
  text-align: left;
  background-color: white;
  -webkit-box-shadow: 5px 5px 40px -3px rgba(255, 0, 0, 0.1);
  box-shadow: 5px 5px 40px -3px rgba(255, 0, 0, 0.1);
`;


const handleWrapperClick = (e, onClose) => {
  if (onClose && (e.target.id === 'modal-wrapper')) {
    onClose();
  }
};


const Modal = ({ children, show, onClose }) => {
  if (!show) {
    return null;
  }
  return (
    <ModalWrapper
      id="modal-wrapper"
      data-testid="modal-wrapper"
      show={show}
      onClick={(e) => handleWrapperClick(e, onClose)}
    >
      <ModalStyledComponent data-testid="modal">
        {children}
      </ModalStyledComponent>
    </ModalWrapper>
  );
};

Modal.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};


Modal.defaultProps = {
  show: false,
  onClose: null
};

export default Modal;
