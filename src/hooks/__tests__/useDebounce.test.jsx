import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UseDebounceExampleComponent from '@hooks/test-components/UseDebounceExampleComponent';


const TIMEOUT = 2000;

test('useDebounce hook updates value after timeout', async () => {
  render(<UseDebounceExampleComponent timeout={TIMEOUT} />);
  await new Promise((resolve) => setTimeout(() => resolve(), TIMEOUT - 1000));
  expect(screen.getByText('initial')).toBeInTheDocument();
  await new Promise((resolve) => setTimeout(() => resolve(), TIMEOUT));
  expect(screen.queryByText('final')).toBeInTheDocument();
});
