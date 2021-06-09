import React from 'react';
import flatten from 'lodash.flatten';
import { act } from 'react-dom/test-utils';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import TaskTwoDemo from '../TaskTwoDemo';


const data = [
  {
    label: 'Loading indicator modal is displayed',
    buttonId: 'loading-indicator-button',
    labelToSearch: 'Data is loading'
  },
  {
    label: 'Delete report modal is displayed',
    buttonId: 'delete-files-button',
    labelToSearch: 'Are you sure you want to delete all of your files?',
    actionButtonsId: 'delete-files-buttons',
    actionButtonIndexes: [0, 1]
  },
  {
    label: 'Delete report modal is displayed',
    buttonId: 'delete-report-button',
    labelToSearch: 'Are you sure you want to delete this report and it\'s history?',
    actionButtonsId: 'delete-report-buttons',
    actionButtonIndexes: [0, 1]
  },
];


const getTestFunction = (buttonId, labelToSearch, testCloseModal) => async () => {
  const component = render(<TaskTwoDemo />);
  const button = component.queryByTestId(buttonId).getElementsByTagName('button')[0];
  await act(async () => {
    let modal = component.queryByTestId('modal');
    expect(modal).not.toBeInTheDocument();
    expect(component.queryByText(labelToSearch)).not.toBeInTheDocument();
    userEvent.click(button);
    await waitFor(() => screen.getByText(labelToSearch));
    expect(component.getByText(labelToSearch)).toBeInTheDocument();
    modal = component.queryByTestId('modal');
    expect(modal).toBeInTheDocument();
    await testCloseModal(component);
    modal = component.queryByTestId('modal');
    expect(modal).not.toBeInTheDocument();
  });
};


flatten(
  data.map(
    ({
      label,
      buttonId,
      labelToSearch,
      actionButtonsId,
      actionButtonIndexes
    }) => {
      let tests = [
        test(
          label,
          getTestFunction(buttonId, labelToSearch, async (component) => {
            const modalWrapper = component.queryByTestId('modal-wrapper');
            userEvent.click(modalWrapper);
          })
        )
      ];

      if (actionButtonsId) {
        tests = tests.concat(
          actionButtonIndexes.map((actionButtonIndex) => test(
            `${label} (close on "${actionButtonsId}(${actionButtonIndex})")`,
            getTestFunction(buttonId, labelToSearch, async (component) => {
              const button = component.queryByTestId(actionButtonsId).getElementsByTagName('button')[actionButtonIndex];
              userEvent.click(button);
            })
          ))
        );
      }

      return tests;
    }
  )
);
