import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Navbar = ({ title, icon }) => {
  return (
    <div className='bg-primary navbar'>
      <div>
        <FontAwesomeIcon icon={icon} />
        <span>{title}</span>
      </div>
    </div>
  );
};

Navbar.defaultProps = {
  icon: faGithub,
  title: 'Github Finder',
};

export default Navbar;
