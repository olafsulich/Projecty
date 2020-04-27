import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, navigate, RouteComponentProps } from '@reach/router';
import { useDispatch } from 'react-redux';
import Layout from '../Layout/Layout';
import StyledHeading from '../components/atoms/Heading';
import StyledLabel from '../components/atoms/Label';
import StyledInput from '../components/atoms/Input';
import StyledLogo from '../components/atoms/Logo';
import { setProjectKey, fetchFactory, getProjectID } from '../state/actions/index';
import useUser from '../hooks/useUser';
import useProjects from '../hooks/useProjects';
import { useTypedSelector } from '../utils/utils';
import { Project, Member } from '../types';

const StyledFormWrapper = styled.main`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 7rem;
  margin-bottom: 3rem;
`;

const StyledFormHeadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  @media only screen and (min-width: 950px) {
    width: auto;
    min-width: 40rem;
    justify-content: center;
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

const StyledButtonSecondary = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 5%;
  right: 4%;
  height: 4.3rem;
  width: 13rem;
  background-color: ${({ theme }) => theme.greenSecondary};
  color: ${({ theme }) => theme.greenPrimary};
  font-size: 1.6rem;
  font-weight: 700;
  border-radius: 10px;
  display: none;

  @media only screen and (min-width: 950px) {
    display: flex;
  }
`;

const StyledForm = styled.form`
  margin-top: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  @media only screen and (min-width: 950px) {
    justify-content: center;
  }
`;

const StyledLabelInputWrapper = styled.fieldset`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 5rem;
  border: none;

  @media only screen and (min-width: 950px) {
    align-items: center;
  }
`;

const StyledButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const StyledButton = styled.button`
  width: 100%;
  height: 4rem;
  font-size: 1.4rem;
  font-weight: 700;
  background-color: ${({ theme }) => theme.pinkPrimary};
  color: #fff;
  border-radius: 8px;
  max-width: 40rem;
  margin-bottom: 2rem;

  :focus {
    background-color: ${({ theme }) => theme.pinkSecondary};
    color: ${({ theme }) => theme.pinkPrimary};
  }

  @media only screen and (min-width: 950px) {
    width: 35%;
  }
  @media only screen and (min-width: 1150px) {
    font-size: 1.5rem;
    width: 45%;
  }
  @media only screen and (min-width: 1400px) {
    width: 55%;
  }
`;

const StyledInfo = styled.p`
  width: 100%;
  text-align: center;
  font-size: 1.4rem;

  @media only screen and (min-width: 950px) {
    display: none;
  }
`;

const StyledInfoButton = styled(Link)`
  text-decoration: none;
  position: relative;
  margin-left: 0.6rem;
  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 50%;
    background-color: ${({ theme }) => theme.pinkSecondary};
    z-index: -1;
    top: 60%;
    left: 15%;
  }
`;
type Props = RouteComponentProps;

const JoinProject: React.FC<Props> = () => {
  const [filteredProject, setFilteredProject] = useState<Project[]>();
  const currentUser = useUser();
  const setKey = useDispatch();
  const projects = useProjects();
  const setTeam = useDispatch();
  const team = useTypedSelector(state => state.team);
  const setProjectID = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredProject(projects.filter((doc: Project) => doc.key === e.target.value));
    setTeam(fetchFactory(projects.filter((doc: Project) => doc.key === e.target.value)[0].id, 'FETCH_TEAM', 'team', 'TEAM'));
  };

  const handleJoin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (projects && currentUser && team && filteredProject) {
      const projectKey = filteredProject[0].key;
      const projectMember = team.filter((doc: Member) => doc.user.uid === currentUser.uid);
      setKey(setProjectKey(projectKey));
      setProjectID(getProjectID(projects, projectKey));
      if (Array.isArray(projectMember) && projectMember.length > 0) {
        navigate(`project/${projectKey}/team`);
      } else {
        navigate(`project/${projectKey}/select-role`);
      }
    }
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
              <StyledHeading form>Join to project</StyledHeading>
              <StyledForm onSubmit={handleJoin}>
                <StyledLabelInputWrapper>
                  <StyledLabel htmlFor="key">Key</StyledLabel>
                  <StyledInput
                    newProject
                    id="key"
                    type="text"
                    onChange={handleInputChange}
                    name="key"
                    aria-label="key"
                    aria-required="true"
                    autoComplete="new-password"
                  />
                </StyledLabelInputWrapper>
                <StyledButtonWrapper>
                  <StyledButton type="submit">Go!</StyledButton>
                  <StyledInfo>
                    Want to start project?
                    <StyledInfoButton to="/join-to-project">Go!</StyledInfoButton>
                  </StyledInfo>
                </StyledButtonWrapper>
              </StyledForm>
            </StyledFormHeadingWrapper>
          </StyledFormWrapper>
        </StyledWrapper>
        <StyledButtonSecondary to="/start-new-project">start project</StyledButtonSecondary>
      </StyledContainer>
    </Layout>
  );
};

export default JoinProject;
