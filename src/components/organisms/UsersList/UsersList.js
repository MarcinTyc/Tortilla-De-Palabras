import React from 'react';
import { users } from '../../../data/users';
import styled from 'styled-components';
import UsersListItem from '../../molecules/UserListItem/UserListItem';

const Wrapper = styled.div`
  background-color: ${({theme}) => theme.colors.white};
  width: 100%;
  max-width: 500px;
  padding: 40px 30px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  	margin-right: 24px;

  

`;

const StyledList = styled.div`

  color:red;

`

const UsersList = () => (
  <Wrapper>
    {/* <StyledList>  */}
    {users.map((userData, i) => (
      <UsersListItem index = {i}key={userData.name} userData={userData} />
    ))}
     {/* </StyledList> */}
  </Wrapper>
);

export default UsersList;
