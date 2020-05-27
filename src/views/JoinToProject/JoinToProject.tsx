import React, { useState } from 'react';
import { navigate } from '@reach/router';
import { useDispatch } from 'react-redux';
import Layout from '../../Layout/Layout';
import Heading from '../../components/atoms/Heading/Heading.styles';
import Label from '../../components/atoms/Label/Label.styles';
import Input from '../../components/atoms/Input/Input.styles';
import Logo from '../../components/atoms/Logo/Logo.styles';
import { setProjectKey, fetchFactory, getProjectID } from '../../state/actions/index';
import useUser from '../../hooks/useUser';
import useProjects from '../../hooks/useProjects';
import { useTypedSelector } from '../../utils/utils';
import { Project, Member } from '../../types';
import { types } from '../../state/enums';
import ErrorMessage from '../../components/atoms/ErrorMessage/ErrorMessage.styles';
import {
  FormWrapper,
  FormHeadingWrapper,
  Container,
  Wrapper,
  LogoWrapper,
  ButtonSecondary,
  Form,
  LabelInputWrapper,
  ButtonWrapper,
  Button,
  Info,
  InfoButton,
} from './JoinToProject.styles';
import { Props, ChangeInputValue } from './JoinToProject.types';

const JoinProject: React.FC<Props> = () => {
  const [filteredProject, setFilteredProject] = useState<Project[]>();
  const [inputValue, setInputValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const currentUser = useUser();
  const setKey = useDispatch();
  const projects = useProjects();
  const setTeam = useDispatch();
  const team = useTypedSelector(state => state.team);
  const setProjectID = useDispatch();
  const { FETCH_TEAM, TEAM } = types;

  const filterProjects = (e: ChangeInputValue) => projects.filter((doc: Project) => doc.key === e.target.value);

  const handleInputChange = (e: ChangeInputValue) => {
    setInputValue(e.target.value);
    setErrorMessage('');
    setFilteredProject(filterProjects(e));
    if (filterProjects(e)[0]) {
      setTeam(fetchFactory(filterProjects(e)[0].id, FETCH_TEAM, TEAM));
    }
    if (!filterProjects(e)[0]) {
      setErrorMessage('Please check your project key');
    }
  };

  const handleJoin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue) {
      setErrorMessage('Key is required');
      return;
    }

    if (projects && currentUser && team && filteredProject && !errorMessage) {
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
      <Container>
        <LogoWrapper to="/">
          <Logo newProject>Projecty</Logo>
        </LogoWrapper>
        <Wrapper>
          <FormWrapper>
            <FormHeadingWrapper>
              <Heading formHeading>Join to project</Heading>
              <Form onSubmit={handleJoin}>
                <LabelInputWrapper>
                  <Label htmlFor="key">Key</Label>
                  <Input
                    newProject
                    value={inputValue}
                    id="key"
                    type="text"
                    onChange={handleInputChange}
                    name="key"
                    aria-label="key"
                    aria-required="true"
                    aria-invalid={errorMessage ? 'true' : 'false'}
                    autoComplete="new-password"
                  />
                  {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                </LabelInputWrapper>

                <ButtonWrapper>
                  <Button type="submit">Go!</Button>
                  <Info>
                    Want to start project?
                    <InfoButton to="/join-to-project">Go!</InfoButton>
                  </Info>
                </ButtonWrapper>
              </Form>
            </FormHeadingWrapper>
          </FormWrapper>
        </Wrapper>
        <ButtonSecondary to="/start-new-project">start project</ButtonSecondary>
      </Container>
    </Layout>
  );
};

export default JoinProject;
