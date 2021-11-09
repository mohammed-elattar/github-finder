import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Alert from './components/layout/Alert';
import Navbar from './components/layout/Navbar';
import './App.css';
import Users from './components/users/Users';
import { Search } from './components/users/Search';
import About from './components/pages/About';
import User from './components/users/User';
import GithubState from './context/github/GithubState';

const App = () => {
  const [alert, setAlert] = useState(null);

  const updateAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
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
              <Route path='/user/:userName' element={<User />} />
            </Routes>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
