import React from 'react';
import { render } from '@testing-library/react';
import { spyOn } from 'jest-mock';
import '@testing-library/jest-dom/extend-expect';
import UseFetchExampleComponent from '@hooks/test-components/UseFetchExampleComponent';


const fetch = () => Promise.resolve({ json: () => 'finish' });

beforeAll(() => {
  global.fetch = fetch;
});

test('useFetch hooks called on the component startup', async () => {
  render(<UseFetchExampleComponent />);
  const spyFetch = spyOn(global, 'fetch');
  expect(spyFetch).not.toHaveBeenCalled();
});
