import React from 'react';
import { RouteComponentProps, navigate } from '@reach/router';
import { useDispatch } from 'react-redux';
import { firestore, auth } from '../../../firebase/index';
import Layout from '../../../Layout/Layout';
import Logo from '../../atoms/Logo/Logo.styles';
import TypeCard from '../../atoms/TypeCard/TypeCard';
import { getProjectID } from '../../../state/actions';
import useUser from '../../../hooks/useUser';
import useProjects from '../../../hooks/useProjects';
import { Project } from '../../../types';
import { types } from '../../../state/enums';
import { FormWrapper, FormHeadingWrapper, Container, Wrapper, LogoWrapper, Form, RoleHeading } from './SelectRole.styles';

const SelectRole: React.FC<RouteComponentProps> = () => {
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
      <Container>
        <LogoWrapper to="/">
          <Logo signUp>Projecty</Logo>
        </LogoWrapper>
        <Wrapper>
          <FormWrapper>
            <FormHeadingWrapper>
              <RoleHeading formHeading>What's your role?</RoleHeading>
              <Form>
                <TypeCard handlePick={handlePick} type="project-manager" />
                <TypeCard handlePick={handlePick} type="developer" />
                <TypeCard handlePick={handlePick} type="designer" />
                <TypeCard handlePick={handlePick} type="quality-assurance" />
              </Form>
            </FormHeadingWrapper>
          </FormWrapper>
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default SelectRole;
