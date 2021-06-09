import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalTitle,
  ModalBody,
  ModalFooter
} from '@components/ui/Modal';
import Button from '@components/ui/Button';
import './DeleteAllFilesModal.css';


const DeleteAllFilesModal = ({ show, onConfirm, onClose }) => (
  <Modal show={show} onClose={onClose}>
    <ModalTitle>
      Are you sure you want to delete all of your files?
    </ModalTitle>
    <ModalBody>
      This action cannot be undone.
    </ModalBody>
    <ModalFooter>
      <div data-testid="delete-files-buttons" className="delete-all-files-footer">
        <Button type="primary" onClick={onConfirm}>Yes</Button>
        <Button onClick={onClose}>No</Button>
      </div>
    </ModalFooter>
  </Modal>
);


DeleteAllFilesModal.propTypes = {
  show: PropTypes.bool,
  onConfirm: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};


DeleteAllFilesModal.defaultProps = {
  show: false
};


export default DeleteAllFilesModal;
