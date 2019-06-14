import React from 'react';
import PropTypes from 'prop-types';
import styles from './Sidebar.css';
import NavLink from './NavLink';

function Sidebar({ links, user }) {
  console.log('link', links)
  const linkList = links.map((link, id) => (
    <li key={id}>
      <NavLink oneLink={link} />
    </li>
  ))
  return (
    <nav className={styles.Sidebar}>
      <img src={user.image || ''} />
      <ul>
        {linkList}
      </ul>
    </nav>
  );
}

Sidebar.propTypes = {
  user: PropTypes.object,
  links: PropTypes.array
};

export default Sidebar;
