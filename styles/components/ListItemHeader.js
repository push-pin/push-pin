import styled from 'styled-components';

const ListItemHeader = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-image: linear-gradient(
    to right,
    rgba(0,60,145, 1),
    rgba(75, 182, 207));

  width: 38.5vw;
  height: 8rem;
  position: absolute;
  margin-bottom: 2rem;
  box-shadow: 0 .5rem .5rem rgba(0, 0, 0, 0.2);
  
  z-index: 100;

    h2 {
      margin: 0 2rem;
      font-size: 2.5em;
    }

    h3 {
      display: block;
      font-size: 2em;
      color: #3A69AA;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0 2rem;

      background-color: #2CE6EA;
      width: 4rem;
      height: 4rem;
      border-radius: 100%;
    }
`;

export { ListItemHeader };
