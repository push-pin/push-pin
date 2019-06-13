import React from 'react';
import PropTypes from 'prop-types';
import styles from './Sidebar.css';
import NavLink from './NavLink';

function Sidebar({ links, user }) {
  const linkList = links.map((link, id) => (
    <li key={id}>
      <NavLink link={link.link} image={link.image} />
    </li>
  ))
  return (
    <nav className={styles.Sidebar}>
      <img src={user.image} />
      <ul>
        {linkList}
      </ul>
    </nav>
  );
}

Sidebar.propTypes = {
  user: PropTypes.object,
  links: PropTypes.array.isRequired 
};

export default Sidebar;
