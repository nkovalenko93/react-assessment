import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalTitle,
  ModalBody,
  ModalFooter
} from '@components/ui/Modal';
import Button from '@components/ui/Button';
import './DeleteReportModal.css';


const DeleteReportModal = ({ show, onConfirm, onClose }) => (
  <Modal show={show} onClose={onClose}>
    <ModalTitle>
      Are you sure you want to delete this report and it&#39;s history?
    </ModalTitle>
    <ModalBody>
      <div className="delete-report">
        <div>
          If you delete the
          <b> Executive metrics </b>
          report, you will also delete the associated history:
        </div>
        <select className="report-multiselect" multiple>
          <option value="jan">January 2020</option>
          <option value="feb">February 2020</option>
          <option value="mar">March 2020</option>
          <option value="apr">April 2020</option>
          <option value="may">May 2020</option>
          <option value="jun">June 2020</option>
        </select>
        <div className="delete-report-input-label">
          Please type the word &lsquo;Delete&lsquo; to remove the
          <b> Executive metrics </b>
          report and it&lsquo;s associated history:
        </div>
        <div className="delete-report-input">
          <input type="text" />
        </div>
      </div>
    </ModalBody>
    <ModalFooter>
      <div data-testid="delete-report-buttons" className="delete-report-footer">
        <Button type="primary" onClick={onConfirm}>
          Delete all
        </Button>
        <Button onClick={onClose}>Cancel</Button>
      </div>
    </ModalFooter>
  </Modal>
);


DeleteReportModal.propTypes = {
  show: PropTypes.bool,
  onConfirm: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};


DeleteReportModal.defaultProps = {
  show: false
};


export default DeleteReportModal;
