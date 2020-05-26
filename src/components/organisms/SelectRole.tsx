import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps, Link, navigate } from '@reach/router';
import { useDispatch } from 'react-redux';
import { firestore, auth } from '../../firebase/index';
import Layout from '../../Layout/Layout';
import Heading from '../atoms/Heading/Heading.styles';
import StyledLogo from '../atoms/Logo/Logo.styles';
import TypeCard from '../atoms/TypeCard/TypeCard';
import { getProjectID } from '../../state/actions';
import useUser from '../../hooks/useUser';
import useProjects from '../../hooks/useProjects';
import { Project } from '../../types';
import { types } from '../../state/enums';

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
    min-width: 55rem;
    justify-content: center;
    height: 100%;
    padding-left: 3rem;
  }
  @media only screen and (min-width: 1200px) {
    min-width: 65rem;
  }
  @media only screen and (min-width: 1400px) {
    min-width: 75rem;
  }
  @media only screen and (min-width: 1600px) {
    min-width: 85rem;
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

const StyledForm = styled.div`
  margin-top: 6rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  align-items: center;
  justify-items: center;
  align-content: center;
  justify-content: center;
  grid-row-gap: 2rem;
  grid-column-gap: 1rem;
`;

const StyledHeading = styled(Heading)`
  margin-left: 4rem;
`;

type Props = RouteComponentProps;

const SelectRole: React.FC<Props> = () => {
  const { PROJECT_KEY } = types;
  const projectKey = localStorage.getItem(PROJECT_KEY);
  const currentUser = useUser();
  const projects = useProjects();
  const setId = useDispatch();

  const filterDocument = (doc: Project) => (projectKey ? doc.key === projectKey : null);

  const handlePick = (e: React.SyntheticEvent<HTMLDivElement, Event>) => {
    if (auth && auth.currentUser) {
      const filteredProject = projects.filter(filterDocument);
      const projectRef = firestore.doc(`projects/${filteredProject[0].id}`);
      const teamCollectionRef = projectRef.collection('team');
      const { uid, photoURL, email, name } = currentUser;

      const userToAdd = {
        uid,
        photoURL,
        email,
        name,
        type: '',
      };

      const { type } = (e.target as HTMLDivElement).dataset;

      const dataToAdd = { user: { ...userToAdd, type } };

      teamCollectionRef.add(dataToAdd);
      setId(getProjectID(projects, projectKey));

      navigate(`/project/${projectKey}/team`);
    }
  };

  return (
    <Layout>
      <StyledContainer>
        <StyledLogoWrapper to="/">
          <StyledLogo signUp>Projecty</StyledLogo>
        </StyledLogoWrapper>
        <StyledWrapper>
          <StyledFormWrapper>
            <StyledFormHeadingWrapper>
              <StyledHeading formHeading>What's your role?</StyledHeading>
              <StyledForm>
                <TypeCard handlePick={handlePick} type="project-manager" />
                <TypeCard handlePick={handlePick} type="developer" />
                <TypeCard handlePick={handlePick} type="designer" />
                <TypeCard handlePick={handlePick} type="quality-assurance" />
              </StyledForm>
            </StyledFormHeadingWrapper>
          </StyledFormWrapper>
        </StyledWrapper>
      </StyledContainer>
    </Layout>
  );
};

export default SelectRole;
