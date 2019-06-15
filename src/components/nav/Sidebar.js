import React from 'react';
import PropTypes from 'prop-types';
import NavLink from './NavLink';
import { logOut } from '../../services/auth';
import { Navbar, NavItemContainer, LogoStyled, ProfileStyled } from '../../../styles/navbar/Navbar';

function Sidebar({ links, user }) {
  const linkList = links.map((link, id) => (
    // eslint-disable-next-line react/jsx-key
    <li key={id}>
      <NavLink oneLink={link} />
    </li>
  ));
  return (
    <Navbar>
      <LogoStyled src="../../../assets/thumbtack.png" />
      <NavItemContainer>
        {linkList}
      </NavItemContainer>
      <ProfileStyled src={user.image || ''} />
      <button onClick={logOut}>Log out</button>
    </Navbar>
  );
}

Sidebar.propTypes = {
  user: PropTypes.object,
  links: PropTypes.array
};

export default Sidebar;
