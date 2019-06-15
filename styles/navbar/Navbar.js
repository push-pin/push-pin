import styled from 'styled-components';

const Navbar = styled.nav `
  display: flex;
  border: 2px solid yellow;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  width: 10vw;
  height: 120vh;
  /* padding: 1rem; */

  background-color: black;
  color: white;


  .nav-description {
    height: 4rem;
    display: block;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
  
  a {

    color: white;

    font-size: 2rem;
    text-decoration: none;
  }


`;

const NavItemContainer = styled.ul `
  border: 2px solid yellow;
  width: 100%;
  
  li {   
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    border: 5px solid pink;

    a {
      display: flex;
      flex-direction: column;
      
      .nav-description {
        padding: 0;
        border: 2px solid green;
        align-self: center;
        width: 2.5em;
        height: auto;
      }
  
      h3 {
        font-size: 1.25rem;
      }
    }

      &:first-child {
        margin-top: 0;
        border: 5px solid pink;
      }
  }
`;

const LogoStyled = styled.img `
  width: 10rem;
  height: auto;
  border-radius: 100%;
`;

const ProfileStyled = styled.img `
  width: 8rem;
  height: auto;
  border-radius: 100%;
`;

export { Navbar, NavItemContainer, LogoStyled, ProfileStyled };
