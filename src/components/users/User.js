import React, { useEffect, Fragment, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User = () => {
  const githubContext = useContext(GithubContext);
  const { user, getUser, getUserRepos, repos } = githubContext;
  const { userName } = useParams();
  useEffect(() => {
    getUser(userName);
    getUserRepos(userName);
  }, []);
  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;
  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back To Search
      </Link>
      Hireable:{' '}
      {hireable ? (
        <FontAwesomeIcon icon={faCheck} className='text-success' />
      ) : (
        <FontAwesomeIcon icon={faTimesCircle} className='text-danger' />
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            className='round-img'
            style={{ width: '150px' }}
            src={avatar_url}
            alt={avatar_url}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark my-1'>
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong> {login}
                </Fragment>
              )}
            </li>

            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong> {company}
                </Fragment>
              )}
            </li>

            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-danger'>Reops: {public_repos}</div>
        <div className='badge badge-dark'>Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
