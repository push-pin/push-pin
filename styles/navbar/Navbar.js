import styled from 'styled-components';

const Navbar = styled.nav `
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  width: 10vw;
  height: 150vh;
  /* padding-bottom: rem; */

  background-image: linear-gradient(
    to right bottom,
    rgba(0,60,145, 1),
    rgba(75, 182, 207, .8));

  .profile-username {
    color: #EBECF6;
    font-weight: 300;
    font-size: 1.25em;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin-bottom: 10rem;
  }
  
  a {
    color: #EBECF6;

    font-size: 2rem;
    text-decoration: none;
  }


`;

const NavItemContainer = styled.ul `
  width: 100%;
  
  li {   
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    text-align: center;

    a {
      display: flex;
      flex-direction: column;
      
      .nav-description {
        padding: 1rem 0;
        align-self: center;
        width: 3.75rem;
        height: auto;

        filter: invert(92%) sepia(21%) saturate(69%) hue-rotate(197deg) brightness(96%) contrast(101%);
      }
  
      h3 {
        font-size: 1.25rem;
        font-weight: 300;
      }
    }

      &:first-child {
        margin-top: 0;
      }
  }
`;

const LogoStyled = styled.img `
  width: 7rem;
  height: auto;
  border-radius: 100%;
`;

const ProfileStyled = styled.img `
  width: 6rem;
  height: auto;
  border-radius: 100%;
`;

const ProfileContainer = styled.section `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 9vw;

    .signout-button {
      margin-top: .8rem;
      width: 8rem;
      color: #EBECF6;
      background-color: transparent;
      border: none;
      text-transform: uppercase;
      font-weight: 400;
    }
`;

export { Navbar, NavItemContainer, LogoStyled, ProfileStyled, ProfileContainer };
