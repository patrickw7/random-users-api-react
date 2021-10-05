import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
  const style = {
    color: '#f9ca24'
  };
  return (
    <nav>
      <ul>
        <li>
          <NavLink className="navLink" exact activeStyle={style} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" exact activeStyle={style} to="/users">
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;