import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NavLink({ link }) {
  return (
    <Link to={link.link}>
      <img src={link.image} />
    </Link>
  );
}

NavLink.propTypes = {
  link: PropTypes.object.isRequired
};

export default NavLink;
