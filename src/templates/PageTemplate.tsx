import React, { useState } from 'react';
import styled from 'styled-components';
import Heading from '../components/atoms/Heading/Heading.styles';
import GridLayout from '../Layout/GridLayout';
import Layout from '../Layout/Layout';
import { ReactComponent as Morphing } from '../assets/morphing.svg';
import Navigation from '../components/molecules/Navigation';
import AddAnnouncement from '../components/molecules/AddAnnouncement';
import AddBacklog from '../components/molecules/AddBacklog';
import AddSprint from '../components/molecules/AddSprint';
import EditProfile from '../components/molecules/EditProfile';

const StyledWrapper = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #fbfbfb;
  padding-top: 5rem;
  overflow-x: hidden;
  @media only screen and (min-width: 950px) {
    padding-top: 10rem;
    position: relative;
  }
`;

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 5%;
`;

const StyledButtonSecondary = styled.button<{ pageHeading: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 8rem;
  background-color: ${({ pageHeading }) => {
    switch (pageHeading) {
      case 'Announcements':
        return '#FFF5DA';
      case 'Team':
        return '#EAFCEE';
      case 'Backlog':
        return '#FFF5DA';
      case 'Sprints':
        return '#EAFCEE';
      case 'Account':
        return '#EAFCEE';
      default:
        return '#f7b801';
    }
  }};
  color: ${({ pageHeading }) => {
    switch (pageHeading) {
      case 'Announcements':
        return '#f7b801';
      case 'Team':
        return '#1FC844';
      case 'Backlog':
        return '#f7b801';
      case 'Sprints':
        return '#1FC844';
      case 'Account':
        return '#1FC844';
      default:
        return '#f7b801';
    }
  }};
  font-size: 1.4rem;
  font-weight: 700;
  border-radius: 10px;
  margin-left: 3rem;

  :focus {
    color: ${({ pageHeading }) => {
      switch (pageHeading) {
        case 'Announcements':
          return '#FFF5DA';
        case 'Team':
          return '#EAFCEE';
        case 'Backlog':
          return '#FFF5DA';
        case 'Sprints':
          return '#EAFCEE';
        case 'Account':
          return '#EAFCEE';
        default:
          return '#f7b801';
      }
    }};
    background-color: ${({ pageHeading }) => {
      switch (pageHeading) {
        case 'Announcements':
          return '#f7b801';
        case 'Team':
          return '#1FC844';
        case 'Backlog':
          return '#f7b801';
        case 'Sprints':
          return '#1FC844';
        case 'Account':
          return '#1FC844';
        default:
          return '#f7b801';
      }
    }};
  }
  @media only screen and (min-width: 950px) {
    margin-bottom: 1rem;
    height: 3.4rem;
    width: 12rem;
    font-size: 1.5rem;
  }
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fbfbfb;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  @media only screen and (min-width: 950px) {
    flex-direction: row;
  }
`;

const StyledMorph = styled(Morphing)`
  width: 10rem;
  height: 10rem;
  position: absolute;
  top: 0;
  left: 0;

  @media only screen and (min-width: 950px) {
    display: none;
  }
`;

const StyledHeading = styled(Heading)`
  width: fit-content;
`;

interface Props {
  pageHeading: string;
}

const PageTemplate: React.FC<Props> = ({ pageHeading, children }) => {
  const [isVisible, setVisibility] = useState<boolean>(false);
  const toggleVisibility = () => setVisibility(prevState => !prevState);

  const chooseModal = () => {
    switch (pageHeading) {
      case 'Announcements':
        return <>{isVisible && <AddAnnouncement isVisible={isVisible} toggleVisibility={toggleVisibility} />} </>;
      case 'Backlog':
        return <>{isVisible && <AddBacklog isVisible={isVisible} toggleVisibility={toggleVisibility} />} </>;
      case 'Sprints':
        return <>{isVisible && <AddSprint isVisible={isVisible} toggleVisibility={toggleVisibility} />} </>;
      case 'Account':
        return <>{isVisible && <EditProfile isVisible={isVisible} toggleVisibility={toggleVisibility} />} </>;
      default:
        return null;
    }
  };

  const isButtonVisible = () => {
    switch (pageHeading) {
      case 'Announcements':
        return (
          <>
            <StyledButtonSecondary pageHeading={pageHeading} onClick={toggleVisibility}>
              {isVisible ? 'Close' : 'Add new'}
            </StyledButtonSecondary>
          </>
        );
      case 'Backlog':
        return (
          <>
            <StyledButtonSecondary pageHeading={pageHeading} onClick={toggleVisibility}>
              {isVisible ? 'Close' : 'Add new'}
            </StyledButtonSecondary>
          </>
        );
      case 'Sprints':
        return (
          <>
            <StyledButtonSecondary pageHeading={pageHeading} onClick={toggleVisibility}>
              {isVisible ? 'Close' : 'Add new'}
            </StyledButtonSecondary>
          </>
        );
      case 'Team':
        return null;
      case 'Account':
        return (
          <>
            <StyledButtonSecondary pageHeading={pageHeading} onClick={toggleVisibility}>
              {isVisible ? 'Close' : 'Edit'}
            </StyledButtonSecondary>
          </>
        );
      default:
        return null;
    }
  };
  return (
    <Layout>
      <StyledContainer>
        <Navigation />
        <StyledMorph />
        <StyledWrapper>
          <StyledHeader>
            <StyledHeading formHeading>{pageHeading}</StyledHeading>
            {isButtonVisible()}
          </StyledHeader>
          {pageHeading === 'Statistics' ? <GridLayout statistics>{children}</GridLayout> : <GridLayout>{children}</GridLayout>}
          {chooseModal()}
        </StyledWrapper>
      </StyledContainer>
    </Layout>
  );
};

export default PageTemplate;
