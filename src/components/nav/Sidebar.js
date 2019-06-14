import React from 'react';
import PropTypes from 'prop-types';
import styles from './Sidebar.css';
import NavLink from './NavLink';
import { logOut } from '../../services/auth';

function Sidebar({ links, user }) {
  console.log('link', links)
  const linkList = links.map((link, id) => (
    <li key={id}>
      <NavLink oneLink={link} />
    </li>
  ))
  return (
    <nav className={styles.Sidebar}>
      <ul>
        {linkList}
      </ul>
      <img src={user.image || ''} />
      <button onClick={logOut}>Log out</button>
    </nav>
  );
}

Sidebar.propTypes = {
  user: PropTypes.object,
  links: PropTypes.array
};

export default Sidebar;
