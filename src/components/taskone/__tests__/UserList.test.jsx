import React from 'react';
import { act } from 'react-dom/test-utils';
import {
  render,
  waitFor,
  screen,
  fireEvent
} from '@testing-library/react';
import { spyOn } from 'jest-mock';
import '@testing-library/jest-dom/extend-expect';
import UserList from '@components/taskone/UserList';


const REQUEST_TIMEOUT = 5000;

const USERS = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    address: {},
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    address: {},
  }
];


const fetch = (url) => Promise.resolve({
  json: () => {
    const [, name] = url.split('?username=');
    if (name) {
      return USERS.filter(({ username }) => (username === name));
    }
    return USERS;
  },
});


beforeAll(() => {
  global.fetch = fetch;
});


test('Component loads and displays list of users', async () => {
  render(<UserList />);
  await waitFor(() => screen.getByText(`Name: ${USERS[0].name}`));
  expect(screen.getByText(`Name: ${USERS[0].name}`)).toBeInTheDocument();
  expect(screen.getByText(`Name: ${USERS[1].name}`)).toBeInTheDocument();
});


test('Component filters the list of users', async () => {
  const component = render(<UserList />);
  await waitFor(() => screen.getByText(`Name: ${USERS[0].name}`));
  const input = component.getByTestId('filter');
  await act(async () => {
    const spyFetch = spyOn(global, 'fetch');
    fireEvent.change(input, { target: { value: 'Br' } });
    await new Promise((resolve) => setTimeout(() => resolve(), 1000));
    expect(spyFetch).not.toHaveBeenCalled();
    fireEvent.change(input, { target: { value: 'Bret' } });
    await new Promise((resolve) => setTimeout(() => resolve(), REQUEST_TIMEOUT + 1000));
    expect(spyFetch).toHaveBeenCalled();
    expect(screen.getByText(`Name: ${USERS[0].name}`)).toBeInTheDocument();
    expect(screen.queryByText(`Name: ${USERS[1].name}`)).not.toBeInTheDocument();
  });
});
