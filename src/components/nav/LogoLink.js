import React from 'react';
import { Link } from 'react-router-dom';
import { LogoStyled } from '../../../styles/navbar/Navbar';
import logo from '../../../assets/nav-icons/logo/pushpin_logomark_vertical.png';

function LogoLink() {
  return (
    <Link to={'/'}>
      <LogoStyled src={logo} />
    </Link>
  );
}

export default LogoLink;
