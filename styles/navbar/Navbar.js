import styled from 'styled-components';

const Navbar = styled.nav `
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  width: 10vw;
  height: 100vh;
  position: fixed;
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
    /* margin-bottom: 5rem; */
  }
  
  a {
    color: #EBECF6;

    font-size: 1.5em;
    text-decoration: none;
  }


`;

const NavItemContainer = styled.ul `
  width: 100%;
  margin-bottom: 2rem;

  .nav-links {   
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
    text-align: center;
    padding: .5rem;
    position: relative;
    display: flex;
    flex-direction: column;
      
      .nav-description {
        padding: 1rem 0;
        align-self: center;
        width: 2.5rem;
        height: auto;

        filter: invert(92%) sepia(21%) saturate(69%) hue-rotate(197deg) brightness(96%) contrast(101%);
      }
  
      h3 {
        font-size: 1.25rem;
        font-weight: 300;
      }

    :hover {
      /* background-color: #003784;
      transform: translateY(-.2rem);
      transition: .4s; */
      color: red;
      /* width: 0%; */
    }

    ::after {
      position: absolute;
      content: '';
      top:0;
      left: 0;
      width: 0;
      height: 100%;
      background-color: #003784;
      transform-origin:left;
      transition:width 0.25s ease;
      z-index:-1;
    }

    :hover::after {
      width: 100%;
    }

      &:first-child {
        margin-top: 0;
      }
`;

const LogoStyled = styled.img `
  width: 6rem;
  height: auto;
  border-radius: 100%;
`;

const ProfileStyled = styled.img `
  width: 4rem;
  height: auto;
  border-radius: 100%;
  margin-bottom: .5rem;
`;

const ProfileContainer = styled.section `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  
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