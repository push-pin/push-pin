import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NavLink({ oneLink }) {
  return (
    
    <Link to={oneLink.address}>
      <img className= "nav-description" src={oneLink.image} alt={oneLink.description} />
      <h3>{oneLink.description}</h3>
    </Link>
  );
}

NavLink.propTypes = {
  oneLink: PropTypes.object.isRequired
};

export default NavLink;
