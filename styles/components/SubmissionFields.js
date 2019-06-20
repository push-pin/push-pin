import styled from 'styled-components';

const SubmitField = styled.section `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width: 70vw;
  height: auto;
  background-color: #FDFDFD;
  /* padding-bottom: 3rem; */
  /* border: 2px solid red; */
  margin-bottom: 4rem;
  
  div:nth-child(2) {
    height: 10rem;
    font-size: 1em;
  }
  
  `;



  const SubmitButton = styled.button `
    /* border: 2px solid yellow; */
    height: 2rem;
    width: 6.5rem;
    margin-left: 78rem;
    margin-top: .5rem;
    background-color: #3A69AA;
    color: white;

    /* padding: .25rem; */
  `;
  

export { SubmitField, SubmitButton };
