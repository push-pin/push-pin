import styled from 'styled-components';

const DetailCard = styled.section `
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
  width: 83vw;
  height: 100vh;
  overflow-y: scroll;
  background-color: #FDFDFD;
  padding-bottom: 3rem;
`;

const DetailCardHeader = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 4rem;
  background-image: linear-gradient(
    to right,
    rgba(0,60,145, 1),
    rgba(75, 182, 207));
    
    width: 100%;
    height: 8rem;

    letter-spacing: 2px;
    color: white;

    .detail-text {
      color: blue;
    }
    
    h3 {
      display: block;
      font-size: 3.5em;
      color: white;
      z-index: 100;
    }

    .submission-details {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding-right: 7rem;

      p {
        padding: .25em;
      }
    }
    
`;

const DetailInfo = styled.section `
flex: 1 1 auto;
padding-left: 4rem;
padding-top: 4rem;
padding-bottom: 4rem;
border-bottom: 4px solid #313E50;

  h4 {
    font-size: 2em;
    color: #313E50;
    padding-bottom: .2em;
  }

  .info-date {
    padding-bottom: 1.1em;
  }

  p {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.2em;
    font-weight: 400;
    color: #313E50;
    line-height: 1.5em;

    :last-child {
      margin-bottom: 4rem;
    }
  }
`;

export { DetailCard, DetailCardHeader, DetailInfo };
