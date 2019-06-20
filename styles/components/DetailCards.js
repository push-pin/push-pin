import styled from 'styled-components';

const DetailCard = styled.section `
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
  width: 83vw;
  /* border: 2px solid red; */
  height: 45rem;
  background-color: #FDFDFD;
  /* box-shadow: 0 .5rem .5rem rgba(0, 0, 0, 0.2); */
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
    
`;

const DetailInfo = styled.section `
padding-left: 4rem;
padding-top: 4rem;
padding-bottom: 10rem;
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

// const DetailCardHeader = styled.header

export { DetailCard, DetailCardHeader, DetailInfo };
