import React, { useEffect, useState } from 'react';
import { RouteComponentProps, navigate } from '@reach/router';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { firestore } from '../../firebase/index';
import Layout from '../../Layout/Layout';
import Heading from '../../components/atoms/Heading/Heading.styles';
import Label from '../../components/atoms/Label/Label.styles';
import Input from '../../components/atoms/Input/Input.styles';
import Logo from '../../components/atoms/Logo/Logo.styles';
import { setProjectKey } from '../../state/actions/index';
import useUser from '../../hooks/useUser';
import ErrorMessage from '../../components/atoms/ErrorMessage/ErrorMessage.styles';
import {
  FormWrapper,
  FormHeadingWrapper,
  Container,
  Wrapper,
  LogoWrapper,
  ButtonSecondary,
  Form,
  Info,
  InfoButton,
  LabelInputWrapper,
  ButtonWrapper,
  Button,
} from './StartNewProject.styles';
import { generateId } from '../../utils/generateId';
import { NewProjectSchema } from './StartNewProject.validate';

const NewProject: React.FC<RouteComponentProps> = () => {
  const currentUser = useUser();
  const setKey = useDispatch();
  const [generatedId, setGeneratedId] = useState<string>('');

  useEffect(() => {
    setGeneratedId(generateId());
  }, []);

  const handleCreate = (projectName: string) => {
    if (currentUser !== null) {
      const projectsRef = firestore.collection('projects');
      const { uid, photoURL, email, name } = currentUser;

      const project = {
        projectName,
        key: generatedId,
        user: {
          uid,
          photoURL,
          email,
          name,
        },
      };
      projectsRef.add({ ...project });
    }
    setKey(setProjectKey(generatedId));
    navigate(`project/${generatedId}/select-role`);
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
              <Heading formHeading>Start a new project</Heading>
              <Formik initialValues={{ name: '' }} validationSchema={NewProjectSchema} onSubmit={({ name }) => handleCreate(name)}>
                {({ values: { name }, handleChange, handleBlur, handleSubmit, errors }) => {
                  return (
                    <Form onSubmit={handleSubmit}>
                      <LabelInputWrapper>
                        <Label htmlFor="name">Name</Label>
                        <Input
                          newProject
                          id="name"
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="name"
                          value={name}
                          aria-label="name"
                          aria-required="true"
                          aria-invalid={errors.name ? 'true' : 'false'}
                          autoComplete="new-password"
                        />
                        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                      </LabelInputWrapper>
                      <LabelInputWrapper>
                        <Label htmlFor="key">Key</Label>
                        <Input
                          newProject
                          id="key"
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="key"
                          value={generatedId}
                          aria-label="key"
                          aria-disabled="true"
                          autoComplete="new-password"
                          placeholder={generatedId}
                          readOnly
                        />
                      </LabelInputWrapper>
                      <ButtonWrapper>
                        <Button type="submit">Create</Button>
                        <Info>
                          Already have project?
                          <InfoButton to="/join-to-project">Join</InfoButton>
                        </Info>
                      </ButtonWrapper>
                    </Form>
                  );
                }}
              </Formik>
            </FormHeadingWrapper>
          </FormWrapper>
        </Wrapper>
        <ButtonSecondary type="yellow" to="/join-to-project">
          join to project
        </ButtonSecondary>
      </Container>
    </Layout>
  );
};

export default NewProject;
