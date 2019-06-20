import styled from 'styled-components';

const DashboardContainer = styled.section `
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #F8FCFF;
  height: 160vh;
  width: 105vw;
  margin-left: 13rem;
`;

// const UpdatesContainer = styled.section `
//   display: flex;
//   justify-content: center;
//   overflow: hidden;
//   width: 85vw;
//   height: auto;
//   border: 2px solid green;
//   `;

const AnnouncementsContainer = styled.section `
  display: flex;
  justify-content: space-between;
  box-sizing: content-box;
  width: 83vw;
  height: auto;
  overflow: hidden;
  `;


const WeekAtGlanceContainer = styled.section `
  display: flex;
  justify-content: center;
  /* border: 2px solid aqua; */
  overflow-y: auto;
  width: 83vw;
  height: 80vh;
  box-shadow: inset 0 .5rem .5rem rgba(0, 0, 0, 0.2);
  
  /* not sure how I feel about this color being the background of the cards*/
  background-color: #EDF2F7;
  `;

const WeekAtGlanceListContainer = styled.section `
  flex-direction: column;
  justify-content: center;
  margin-top: 8rem;
  width: 83vw;
  `;

const UpperDashboardContainer = styled.section `
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: lightgrey; */
  /* margin: 0 2rem; */
  overflow: scroll;
  width: 38.5vw;
  height: 38rem;
  border-bottom: .5rem solid rgba(0,60,145, .5);
  box-shadow: inset 0 .5rem .5rem rgba(0, 0, 0, 0.2);
  
  background-color: #EDF2F7;
  `;

const DayContainer = styled.section `
  display: flex;
  flex-direction: column;
  /* border: 2px solid purple; */
  
  .day-stripe {
    background-color: #3A69AA;
    color: #EDF2F7;
  }
  
  h3 {
    font-size: 3.5em;
    /* color: white; */
    letter-spacing: 1px;
    padding: 2rem;
    
  }
  `;


//PERTAINS TO ASSIGNMENT DETAILS CONTAINER
const AssignmentContainer = styled(AnnouncementsContainer) `
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border: 2px solid yellow;
    height: 40vw;
    margin-top: 4rem;
  `;

export {
  DashboardContainer,
  AnnouncementsContainer,
  WeekAtGlanceContainer,
  WeekAtGlanceListContainer,
  UpperDashboardContainer,
  DayContainer,
  AssignmentContainer
};
