import React from 'react';
import PropTypes from 'prop-types';
import NavLink from './NavLink';
import { logOut } from '../../services/auth';
import { Navbar, NavItemContainer, LogoStyled, ProfileStyled, ProfileContainer } from '../../../styles/navbar/Navbar';

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
      <ProfileContainer>
        <ProfileStyled src={user.image || ''} />
        <h4 className="profile-username">{user.username}</h4>
        <button className="signout-button" onClick={logOut}>Log out</button>
      </ProfileContainer>
    </Navbar>
  );
}

Sidebar.propTypes = {
  user: PropTypes.object,
  links: PropTypes.array
};

export default Sidebar;
