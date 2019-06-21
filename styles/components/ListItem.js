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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 12rem;
    background-color: #3A69AA;
    color: white;
    font-size: 1.5em;
    padding: 1rem;

    h3 {
      font-weight: 100;
      padding: .25em;
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
      font-size: 1.4em;
      font-weight: 400;
      color: #313E50;
      margin-bottom: .4rem;
    }

    .recentEvent {
      font-size: 1.8em;
      margin-bottom: 1.5rem;
      color: #313E50;
    }

    .recentSubmission {
      font-size: 1.8em;
      margin-bottom: 1.5rem;
      color: #313E50;
    }

    p {
      font-family: 'Open Sans', sans-serif;
      font-size: 1.2em;
      font-weight: 400;
      color: #313E50;
      line-height: 1.5em;
    }


  }

`;

const ListItemWeek = styled(ListItem) `
  
/* was 85% for card  */
  width: 100%;

  .type {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #3A69AA;
    width: 25rem;
    color: white;
    line-height: 0;
  }
  
  h4 {
      font-size: 2em;
      font-weight: 700;
      margin-bottom: .5rem;
      letter-spacing: 2px;
    }

    p {
      font-family: 'Open Sans', sans-serif;
      font-size: 1.5em;
      font-weight: 400;
      line-height: 1.5em;
    }

  .assignment-detail {
    width: 100%;
    padding: 1.5em;
  }

`;

const ListItemSubmission = styled.li `
  display: flex;
  flex-direction: column;
  background-color: #FDFDFD;
  width: 80rem;
  margin-top: 2rem;
  list-style-type: none;
  box-shadow: 0 .5rem .5rem rgba(0, 0, 0, 0.2);

  &:last-child {
    margin-bottom: 2rem;
  }

  .type {
    display: flex;
    justify-content: flex-start; 
    align-items: center;
    background-color: #3A69AA;
    width: 100%;
    color: white;
    line-height: 0;
    height: 10rem;
  }

  .profile-info {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 10rem;
    width: 100%;
    padding-left: 4rem;

    h3 {
      font-size: 2rem;
    }

    p {
      font-size: 1.2rem;
    }

  }
  
  .assignment-detail {
    width: 100%;
    height: 20rem;
    padding: 4em;
  }

`;



const ListItemUl = styled.ul `
  display:flex;
  flex-direction: column;
  position: relative;
  padding-top: 8rem;
  height: auto;
`;

const ListItemUlWeek = styled(ListItemUl) `
  display: flex;
  padding: 4rem;
  align-items: center;
`;

export {
  ListItem,
  ListItemWeek,
  ListItemUl,
  ListItemUlWeek,
  ListItemSubmission
};
