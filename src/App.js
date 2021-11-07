import React, { useEffect, useState } from 'react';
import Navbar from './layout/Navbar';
import './App.css';
import Users from './users/Users';
import axios from 'axios';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const response = await axios.get(
        `https://api.github.com/users?
        client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
        client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      setUsers(response.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className='container'>
        <Users loading={loading} users={users} />
      </div>
    </div>
  );
};

export default App;
