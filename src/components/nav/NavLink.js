import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NavLink({ oneLink }) {
  console.log('link in NavLink', oneLink);
  return (
    <Link to={oneLink.address}>
      <img src={oneLink.image} />
    </Link>
  );
}

NavLink.propTypes = {
  oneLink: PropTypes.object.isRequired
};

export default NavLink;
