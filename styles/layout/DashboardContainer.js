import styled from 'styled-components';

const DashboardContainer = styled.section `
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #F8FCFF;
  height: 120vh;
  width: 100vw;
`;

const UpdatesContainer = styled.section `
  display: flex;
  justify-content: space-between;
  border: 2px solid purple;
  overflow: hidden;
  width: 85vw;
  height: 25rem;
  `;

const AnnouncementsContainer = styled.section `
  display: flex;
  /* border: 2px solid pink; */
  overflow-y: scroll;
  padding-right: 2rem;
  box-sizing: content-box;
  width: 38vw;
  height: 28rem;
  `;

const WeekAtGlanceContainer = styled.section `
  border: 2px solid aqua;
  overflow-y: auto;
  width: 85vw;
  height: 60vh;

`;

export {
  DashboardContainer,
  UpdatesContainer,
  AnnouncementsContainer,
  WeekAtGlanceContainer
};
