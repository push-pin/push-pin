import styled from 'styled-components';

const DashboardContainer = styled.section `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 2px solid red;
  height: 120vh;
  width: 100vw;
`;

const UpdatesContainer = styled.section `
  display: flex;
  justify-content: space-between;
  border: 2px solid purple;
  width: 70vw;
  height: 22rem;
  `;

const AnnouncementsContainer = styled.section `
  border: 2px solid pink;
  overflow-y: auto;
  width: 33vw;
  height: 22rem;
  
  `;

const WeekAtGlanceContainer = styled.section `
  border: 2px solid aqua;
  overflow-y: auto;
  width: 70vw;
  height: 60vh;

`;

export {
  DashboardContainer,
  UpdatesContainer,
  AnnouncementsContainer,
  WeekAtGlanceContainer
};
