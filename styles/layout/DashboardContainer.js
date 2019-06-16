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
  width: 80vw;
  height: 60vh;

`;

const UpperDashboardContainer = styled.section `
  display: flex;
  flex-direction: column;
  background-color: lightgrey;
  margin: 0 2rem;
  overflow: scroll;
  width: 33vw;
  height: 40rem;
`;

export {
  DashboardContainer,
  AnnouncementsContainer,
  WeekAtGlanceContainer,
  UpperDashboardContainer
};
