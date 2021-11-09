import React, { useEffect, useState, Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Alert from './components/layout/Alert';
import Navbar from './components/layout/Navbar';
import './App.css';
import Users from './components/users/Users';
import axios from 'axios';
import { Search } from './components/users/Search';
import About from './components/pages/About';
import User from './components/users/User';
import GithubState from './context/github/GithubState';

const App = () => {
  const [alert, setAlert] = useState(null);
  const [repos, setRepos] = useState([]);

  const updateAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const getUserRepos = async (userName) => {
    // setLoading(true);
    const response = await axios.get(
      `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setRepos(response.data);
    // setLoading(false);
  };

  //   useEffect(() => {
  //     setLoading(true);
  //     async function fetchData() {
  //       setLoading(false);
  //       const response = await axios.get(
  //         `https://api.github.com/users?
  //         client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
  //         client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //       );
  //       setUsers(response.data);
  //       setLoading(false);
  //     }
  //     fetchData();
  //   }, []);

  return (
    <GithubState>
      <Router>
        <div>
          <Navbar />
          <div className='container'>
            <Alert alert={alert} />
            <Routes>
              <Route
                exact
                path='/'
                element={
                  <Fragment>
                    <Search setAlert={updateAlert} />
                    <Users />
                  </Fragment>
                }
              />
              <Route path='/about' element={<About />} />
              <Route
                path='/user/:userName'
                element={<User getUserRepos={getUserRepos} repos={repos} />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
