import React from 'react';
import styled from 'styled-components';
import { Link, navigate, RouteComponentProps } from '@reach/router';
import { useDispatch } from 'react-redux';
import Layout from '../Layout/Layout';
import StyledHeading from '../components/atoms/Heading';
import StyledLogo from '../components/atoms/Logo';
import { getProjectID } from '../actions';
import FoundersProjectsList from '../components/molecules/FoundersProjectsList';
import useProjects from '../hooks/useProjects';

const StyledFormWrapper = styled.main`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
`;

const StyledFormHeadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 2rem;

  @media only screen and (min-width: 950px) {
    width: auto;
    min-width: 40rem;
    height: 100%;
    padding-left: 3rem;
  }
  @media only screen and (min-width: 1200px) {
    min-width: 40rem;
  }
  @media only screen and (min-width: 1400px) {
    min-width: 45rem;
  }
  @media only screen and (min-width: 1600px) {
    min-width: 50rem;
  }
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 3rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  overflow: hidden;

  @media only screen and (min-width: 950px) {
    padding: 0;
  }
`;

const StyledWrapper = styled.section`
  width: 100%;
  max-width: 40rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  @media only screen and (min-width: 950px) {
    height: 100%;
    width: 50%;
    justify-content: center;
    padding: 3rem 2rem;
    max-width: 50%;
  }
  @media only screen and (min-width: 1200px) {
    width: 60%;
    max-width: 60%;
  }
  @media only screen and (min-width: 1600px) {
    width: 70%;
    max-width: 70%;
  }
`;

const StyledLogoWrapper = styled(Link)`
  position: absolute;
  top: 7%;
  left: 4%;
`;

const StyledButtonsWrapper = styled.div`
  position: absolute;
  top: 5%;
  right: 4%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media only screen and (min-width: 500px) {
    flex-direction: row;
  }
`;

const StyledButtonSecondary = styled(Link)<{ type: string }>`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4.3rem;
  width: 13rem;
  margin: 1rem;
  background-color: ${({ type }) => {
    switch (type) {
      case 'yellow':
        return '#fff5da';
      case 'green':
        return '#eafcee';
      default:
        return '#fff5da';
    }
  }};
  color: ${({ type }) => {
    switch (type) {
      case 'yellow':
        return '#f7b801';
      case 'green':
        return '#1fc844';
      default:
        return '#f7b801';
    }
  }};
  font-size: 1.6rem;
  font-weight: 700;
  border-radius: 10px;
`;

type Props = RouteComponentProps;

const Projects: React.FC<Props> = () => {
  const projects: any = useProjects();
  const setId: any = useDispatch();

  const handlePick = (projectKey: string) => {
    setId(getProjectID(projects, projectKey));
    navigate(`project/${projectKey}/team`);
  };

  return (
    <Layout>
      <StyledContainer>
        <StyledLogoWrapper to="/">
          <StyledLogo newProject>Projecty</StyledLogo>
        </StyledLogoWrapper>
        <StyledWrapper>
          <StyledFormWrapper>
            <StyledFormHeadingWrapper>
              <StyledHeading form>Choose your project</StyledHeading>
              <FoundersProjectsList projects={projects} handlePick={handlePick} />
            </StyledFormHeadingWrapper>
          </StyledFormWrapper>
        </StyledWrapper>

        <StyledButtonsWrapper>
          <StyledButtonSecondary type="yellow" to="/join-to-project">
            join to project
          </StyledButtonSecondary>
          <StyledButtonSecondary type="green" to="/start-new-project">
            start project
          </StyledButtonSecondary>
        </StyledButtonsWrapper>
      </StyledContainer>
    </Layout>
  );
};

export default Projects;

// import React from 'react';

// const Projects = () => <div>sss</div>;
// export default Projects;
