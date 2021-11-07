import React from 'react';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';

const Users = ({ loading, users }) => {
  if (loading) {
    return <Spinner />;
  }
  return (
    <div style={userStyle}>
      {users.map((user) => (
        <UserItem user={user} key={user.id} />
      ))}
    </div>
  );
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};

export default Users;
