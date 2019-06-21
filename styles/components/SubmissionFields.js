import styled from 'styled-components';

const SubmitField = styled.section `
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width: 70vw;
  height: 100%;
  background-color: #FDFDFD;
  margin-bottom: 4rem;
  
  div:nth-child(2) {
    height: 10rem;
    font-size: 1em;
  }
  
  `;


const SubmitButton = styled.button `
  height: 2rem;
  width: 6.5rem;
  margin-left: 78rem;
  margin-top: .5rem;
  background-color: #3A69AA;
  color: white;

  `;
  

export { SubmitField, SubmitButton };
