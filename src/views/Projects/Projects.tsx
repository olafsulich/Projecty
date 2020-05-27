import React from 'react';
import { navigate, RouteComponentProps } from '@reach/router';
import { useDispatch } from 'react-redux';
import Layout from '../../Layout/Layout';
import Heading from '../../components/atoms/Heading/Heading.styles';
import Logo from '../../components/atoms/Logo/Logo.styles';
import { getProjectID } from '../../state/actions';
import FoundersProjectsList from '../../components/molecules/FoundersProjectsList/FoundersProjectsList';
import useProjects from '../../hooks/useProjects';
import { FormWrapper, FormHeadingWrapper, Container, Wrapper, LogoWrapper, ButtonsWrapper, ButtonSecondary } from './Projects.style';

const Projects: React.FC<RouteComponentProps> = () => {
  const projects = useProjects();
  const setId = useDispatch();

  const handlePick = (projectKey: string) => {
    setId(getProjectID(projects, projectKey));
    navigate(`project/${projectKey}/team`);
  };

  return (
    <Layout>
      <Container>
        <LogoWrapper to="/">
          <Logo newProject>Projecty</Logo>
        </LogoWrapper>
        <Wrapper>
          <FormWrapper>
            <FormHeadingWrapper>
              <Heading formHeading>Choose your project</Heading>
              <FoundersProjectsList projects={projects} handlePick={handlePick} />
            </FormHeadingWrapper>
          </FormWrapper>
        </Wrapper>
        <ButtonsWrapper>
          <ButtonSecondary type="yellow" to="/join-to-project">
            join to project
          </ButtonSecondary>
          <ButtonSecondary type="green" to="/start-new-project">
            start project
          </ButtonSecondary>
        </ButtonsWrapper>
      </Container>
    </Layout>
  );
};

export default Projects;
