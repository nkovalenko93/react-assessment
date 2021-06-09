import React, { useState } from 'react';
import Button from '@components/ui/Button';
import LoadingIndicatorModal from '@components/modals/LoadingIndicatorModal';
import DeleteAllFilesModal from '@components/modals/DeleteAllFilesModal';
import DeleteReportModal from '@components/modals/DeleteReportModal';

import './TaskTwoDemo.css';


const TaskTwoDemo = () => {
  const [showLoadingIndicatorModal, setShowLoadingIndicatorModal] = useState(false);
  const [showDeleteAllFilesModal, setShowDeleteAllFilesModal] = useState(false);
  const [showDeleteReportModal, setShowDeleteReportModal] = useState(false);
  return (
    <div className="task-two-demo">
      <div data-testid="loading-indicator-button" className="task-two-demo-button">
        <Button onClick={() => setShowLoadingIndicatorModal(true)}>
          Show loading modal
        </Button>
      </div>
      <div data-testid="delete-files-button" className="task-two-demo-button">
        <Button onClick={() => setShowDeleteAllFilesModal(true)}>
          Delete files modal
        </Button>
      </div>
      <div data-testid="delete-report-button" className="task-two-demo-button">
        <Button onClick={() => setShowDeleteReportModal(true)}>
          Delete report modal
        </Button>
      </div>
      <LoadingIndicatorModal
        show={showLoadingIndicatorModal}
        onClose={() => setShowLoadingIndicatorModal(false)}
      />
      <DeleteAllFilesModal
        show={showDeleteAllFilesModal}
        onConfirm={() => setShowDeleteAllFilesModal(false)}
        onClose={() => setShowDeleteAllFilesModal(false)}
      />
      <DeleteReportModal
        show={showDeleteReportModal}
        onConfirm={() => setShowDeleteReportModal(false)}
        onClose={() => setShowDeleteReportModal(false)}
      />
    </div>
  );
};


export default TaskTwoDemo;
