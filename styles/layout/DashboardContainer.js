import styled from 'styled-components';

const DashboardContainer = styled.section `
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #F8FCFF;
  height: 160vh;
  width: 105vw;
  margin-left: 3rem;
`;


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

const CourseAssignmentListContainer = styled(WeekAtGlanceListContainer) `
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 75rem;

`;

const UpperDashboardContainer = styled.section `
  display: flex;
  flex-direction: column;
  align-items: center;
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
  
  .day-stripe {
    background-color: #3A69AA;
    color: #EDF2F7;
  }
  
  h3 {
    font-size: 3.5em;
    letter-spacing: 1px;
    padding: 2rem;
    
  }
  `;

//PERTAINS TO ASSIGNMENT DETAILS CONTAINER
const AssignmentContainer = styled(AnnouncementsContainer) `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 .5rem .5rem rgba(0, 0, 0, 0.2);
    height: 70%;
    margin: 4rem 0;
    background-color: #FDFDFD;
  `;

const CourseAssignmentContainer = styled(DashboardContainer) `
  height: 100vh;
`;


export {
  DashboardContainer,
  AnnouncementsContainer,
  WeekAtGlanceContainer,
  WeekAtGlanceListContainer,
  UpperDashboardContainer,
  DayContainer,
  AssignmentContainer,
  CourseAssignmentContainer,
  CourseAssignmentListContainer
};
