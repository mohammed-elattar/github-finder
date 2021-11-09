import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

export const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const { searchUsers, clearUsers, users } = githubContext;
  const { setAlert } = alertContext;
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
