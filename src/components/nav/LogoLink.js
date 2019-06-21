import React from 'react';
import { Link } from 'react-router-dom';
import { LogoStyled } from '../../../styles/navbar/Navbar';

function LogoLink() {
  return (
    <Link to={'/'}>
      <LogoStyled src="../../../assets/nav-icons/logo/pushpin_logomark_vertical.png"/>
    </Link>
  );
}

export default LogoLink;
