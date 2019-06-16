import styled from 'styled-components';

const ListItem = styled.li `
  background-color: #FDFDFD;
  height: 10rem;
  width: 36vw;
  margin-top: 2rem;
  list-style-type: none;
  box-shadow: 0 .5rem .5rem rgba(0, 0, 0, 0.2);

  &:last-child {
    margin-bottom: 2rem;
  }
`;

const ListItemUl = styled.ul `
  display:flex;
  flex-direction: column;
  position: relative;
  padding-top: 8rem;
  height: auto;
`;

export { ListItem, ListItemUl };
