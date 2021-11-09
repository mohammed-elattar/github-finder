import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Alert from './components/layout/Alert';
import Navbar from './components/layout/Navbar';
import './App.css';
import Users from './components/users/Users';
import { Search } from './components/users/Search';
import About from './components/pages/About';
import User from './components/users/User';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div>
            <Navbar />
            <div className='container'>
              <Alert />
              <Routes>
                <Route
                  exact
                  path='/'
                  element={
                    <Fragment>
                      <Search />
                      <Users />
                    </Fragment>
                  }
                />
                <Route path='/about' element={<About />} />
                <Route path='/user/:userName' element={<User />} />
              </Routes>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
