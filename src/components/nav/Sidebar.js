import React from 'react';
import PropTypes from 'prop-types';
import NavLink from './NavLink';
import { logOut } from '../../services/auth';
import { Navbar, NavItemContainer, ProfileStyled, ProfileContainer } from '../../../styles/navbar/Navbar';
import LogoLink from './LogoLink';
import placeholder from '../../../assets/place-holder.png';

function Sidebar({ links, user }) {
  const linkList = links.map((link, id) => (
    // eslint-disable-next-line react/jsx-key
    <li className="nav-links" key={id}>
      <NavLink oneLink={link} />
    </li>
  ));
  return (
    <Navbar>
      <LogoLink />
      <NavItemContainer>
        {linkList}
      </NavItemContainer>
      <ProfileContainer>
        <ProfileStyled src={ placeholder } />
        <h4 className="profile-username">{user.user.firstName}</h4>
        <h4 className="profile-username">{user.user.lastName}</h4>
        <button className="signout-button" onClick={logOut}>Log out</button>
        <div className="sign-out"></div>
      </ProfileContainer>
    </Navbar>
  );
}

Sidebar.propTypes = {
  user: PropTypes.object,
  links: PropTypes.array
};

export default Sidebar;
