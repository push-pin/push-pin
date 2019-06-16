import styled from 'styled-components';

const ListItem = styled.li `
  display: flex; 
  justify-content: space-between;
  background-color: #FDFDFD;
  height: 10rem;
  width: 36vw;
  margin-top: 2rem;
  list-style-type: none;
  box-shadow: 0 .5rem .5rem rgba(0, 0, 0, 0.2);

  &:last-child {
    margin-bottom: 2rem;
  }

  .date {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12rem;
    background-color: #3A69AA;
    color: white;
    font-size: 1.5rem;
    padding: 1rem;

    h3 {
      font-weight: 100;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    /* line-height: 2em; */
    width: 100%;
    padding: 1rem;

    h4 {
      font-size: 1.8em;
      font-weight: 700;
      color: #313E50;
      margin-bottom: .5rem;
    }

    .preview {
      font-family: 'Open Sans', sans-serif;
      font-size: 1.3em;
      font-weight: 400;
      color: #313E50;
      margin-bottom: .5rem;
    }

    .recentEvent {
      font-size: 1.8em;
      margin-bottom: 1.5rem;
      color: #313E50;
    }

    p {
      font-family: 'Open Sans', sans-serif;
      font-size: 1.5em;
      font-weight: 100;
      color: #313E50;
      line-height: 1.5em;
    }


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
