import styled from 'styled-components';

const Navbar = styled.nav `
  display: flex;
  border: 2px solid yellow;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  width: 20vw;
  height: 120vh;
  /* padding: 1rem; */

  background-color: black;
  color: white;


  img {
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
  
  li {   
    margin-top: 2rem;
    border: 5px solid pink;

      &:first-child {
        margin-top: 0;
        border: 5px solid pink;
      }
  }
`;

export { Navbar, NavItemContainer };
