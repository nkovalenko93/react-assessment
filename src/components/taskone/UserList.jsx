import React, { useState } from 'react';
import styled from 'styled-components';
import useDebounce from '@hooks/useDebounce';
import useFetch from '@hooks/useFetch';


const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border: 1px solid #000;
  padding: 20px;

  span {
    display: block;
    margin-bottom: 5px;
  }
`;


const UserInfo = styled.div`
  border-right: 1px solid #000;
  text-align: left;
  width: 260px;
`;


const Users = styled.div`
  max-height: 300px;
  overflow: scroll;
  margin-top: 15px;
`;


const USERS_API_URL = 'https://jsonplaceholder.typicode.com/users';
const SEARCH_TIMEOUT = 5000;

const UserList = () => {
  const [filter, setFilter] = useState('');
  const debouncedFilter = useDebounce(filter, SEARCH_TIMEOUT);
  const users = useFetch(USERS_API_URL, debouncedFilter ? { username: debouncedFilter } : {}) || [];

  return (
    <div>
      <div>
        Filter:
        <input
          data-testid="filter"
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Enter username"
        />
      </div>
      <Users id="user-list">
        {
          users.map((user) => (
            <Row key={user.id}>
              <UserInfo>
                <span>{`Name: ${user.name}`}</span>
                <span>{`Username: ${user.username}`}</span>
              </UserInfo>
              <div>
                <div>
                  <span>{user.address.street}</span>
                  <span>{user.address.suite}</span>
                  <span>{user.address.city}</span>
                  <span>{user.address.zipcode}</span>
                </div>
                <div>
                  <span>{user.email}</span>
                  <span>{user.phone}</span>
                </div>
              </div>
            </Row>
          ))
        }
      </Users>
    </div>
  );
};


export default UserList;
