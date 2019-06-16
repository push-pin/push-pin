import styled from 'styled-components';

const DashboardContainer = styled.section `
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #F8FCFF;
  height: 140vh;
  width: 100vw;
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
  border: 2px solid aqua;
  overflow-y: auto;
  width: 83vw;
  height: 60vh;

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
    
`;

export {
  DashboardContainer,
  AnnouncementsContainer,
  WeekAtGlanceContainer,
  UpperDashboardContainer
};
