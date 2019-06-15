import styled from 'styled-components';

const DashboardContainer = styled.section `
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 2px solid red;
  height: 120vh;
  width: 100vw;
`;

const UpdatesContainer = styled.section `
  display: flex;
  justify-content: space-between;
  border: 2px solid purple;
  overflow: hidden;
  width: 80vw;
  height: 22rem;
  `;

const AnnouncementsContainer = styled.section `
  border: 2px solid pink;
  overflow-y: scroll;
  padding-right: 2rem;
  box-sizing: content-box;
  width: 33vw;
  height: 22rem;
  
  `;

const WeekAtGlanceContainer = styled.section `
  border: 2px solid aqua;
  overflow-y: auto;
  width: 80vw;
  height: 60vh;

`;

export {
  DashboardContainer,
  UpdatesContainer,
  AnnouncementsContainer,
  WeekAtGlanceContainer
};
