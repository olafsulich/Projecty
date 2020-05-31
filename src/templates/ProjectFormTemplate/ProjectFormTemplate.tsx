import React from 'react';
import Heading from '../../components/atoms/Heading/Heading.styles';
import Label from '../../components/atoms/Label/Label.styles';
import Input from '../../components/atoms/Input/Input.styles';
import Logo from '../../components/atoms/Logo/Logo.styles';
import Card from '../../components/atoms/Card/Card';
import usePageWidth from '../../hooks/usePageWidth';
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
} from './ProjectFormTemplate.styles';
import { Props } from './ProjectFormTemplate.types';

const ProjectForm: React.FC<Props> = ({ newProject, projectsList }) => {
  const pageWidth = usePageWidth();
  return (
    <Container>
      <LogoWrapper to="/">
        <Logo newProject>Projecty</Logo>
      </LogoWrapper>
      <Wrapper>
        <FormWrapper>
          <FormHeadingWrapper projectsList={projectsList}>
            <Heading formHeading>{newProject ? 'Start a new project' : 'Join to project'}</Heading>
            {projectsList ? (
              <>
                <Card heading="Projecty" content="tool for project menagement" type="project" />
                <Card heading="Projecty" content="tool for project menagement" type="project" />
              </>
            ) : (
              <Form>
                {newProject ? (
                  <LabelInputWrapper>
                    <Label>Name</Label>
                    <Input newProject />
                  </LabelInputWrapper>
                ) : null}
                <LabelInputWrapper>
                  <Label>Key</Label>
                  <Input newProject />
                </LabelInputWrapper>
                <ButtonWrapper>
                  <Button newProject type="submit">
                    {newProject ? 'Create' : 'Join'}
                  </Button>

                  {pageWidth >= 950 ? null : (
                    <Info>
                      {newProject ? ' Already have project?' : 'Want to start new project?'}

                      <InfoButton to={newProject ? '/join-to-project' : '/start-new-project'}>{newProject ? 'Join' : 'Create'}</InfoButton>
                    </Info>
                  )}
                </ButtonWrapper>
              </Form>
            )}
          </FormHeadingWrapper>
        </FormWrapper>
      </Wrapper>
      {pageWidth >= 950 ? (
        <ButtonSecondary to={newProject ? '/join-to-project' : '/start-new-project'}>
          {newProject ? 'join to project' : 'start project'}
        </ButtonSecondary>
      ) : null}
    </Container>
  );
};

export default ProjectForm;
