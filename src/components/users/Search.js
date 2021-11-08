import React, { useState } from 'react';

export const Search = ({ search, clearUsers, showClearButton, setAlert }) => {
  const [text, setText] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    if (text) {
      search(text);
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
      {showClearButton && (
        <button className='btn btn-light btn-block' onClick={resetUsers}>
          Clear Users
        </button>
      )}
    </div>
  );
};
