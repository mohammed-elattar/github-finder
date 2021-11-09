import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';

export const Search = ({ setAlert }) => {
  const githubContext = useContext(GithubContext);
  const { searchUsers, clearUsers, users } = githubContext;
  const [text, setText] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    if (text) {
      searchUsers(text);
    } else {
      setAlert('Enter Something Here.', 'light');
    }
  };

  const resetUsers = () => {
    clearUsers();
    setText('');
  };
  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          className=''
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {users.length > 0 && (
        <button className='btn btn-light btn-block' onClick={resetUsers}>
          Clear Users
        </button>
      )}
    </div>
  );
};
