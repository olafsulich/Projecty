import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { RouteComponentProps, Link, navigate } from '@reach/router';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { firestore } from '../firebase/index';
import Layout from '../layout/Layout';
import StyledHeading from '../components/atoms/Heading';
import StyledLabel from '../components/atoms/Label';
import StyledInput from '../components/atoms/Input';
import StyledLogo from '../components/atoms/Logo';
import { setProjectKey } from '../state/actions/index';
import useUser from '../hooks/useUser';
import ErrorMessage from '../components/atoms/ErrorMessage';

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
  background-color: ${({ theme }) => theme.yellowSecondary};
  color: ${({ theme }) => theme.yellowPrimary};
  font-size: 1.6rem;
  font-weight: 700;
  border-radius: 10px;
  display: none;

  :focus {
    color: ${({ theme }) => theme.yellowSecondary};
    background-color: ${({ theme }) => theme.yellowPrimary};
  }

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

const NewProject: React.FC<Props> = () => {
  const currentUser = useUser();
  const setKey = useDispatch();
  const [generatedId, setGeneratedId] = useState<string>('');

  const generateId = () =>
    setGeneratedId(
      Math.random()
        .toString(36)
        .substr(2, 9),
    );

  useEffect(() => {
    generateId();
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
      <StyledContainer>
        <StyledLogoWrapper to="/">
          <StyledLogo newProject>Projecty</StyledLogo>
        </StyledLogoWrapper>
        <StyledWrapper>
          <StyledFormWrapper>
            <StyledFormHeadingWrapper>
              <StyledHeading formHeading>Start a new project</StyledHeading>
              <Formik
                initialValues={{ name: '' }}
                validate={({ name }) => {
                  const errors: Partial<{ name: string }> = {};
                  if (!name) {
                    errors.name = 'Name is required';
                  }
                  return errors;
                }}
                onSubmit={({ name }) => handleCreate(name)}
              >
                {({ values: { name }, handleChange, handleBlur, handleSubmit, errors }) => {
                  return (
                    <StyledForm onSubmit={handleSubmit}>
                      <StyledLabelInputWrapper>
                        <StyledLabel htmlFor="name">Name</StyledLabel>
                        <StyledInput
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
                      </StyledLabelInputWrapper>
                      <StyledLabelInputWrapper>
                        <StyledLabel htmlFor="key">Key</StyledLabel>
                        <StyledInput
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
                      </StyledLabelInputWrapper>
                      <StyledButtonWrapper>
                        <StyledButton type="submit">Create</StyledButton>
                        <StyledInfo>
                          Already have project?
                          <StyledInfoButton to="/join-to-project">Join</StyledInfoButton>
                        </StyledInfo>
                      </StyledButtonWrapper>
                    </StyledForm>
                  );
                }}
              </Formik>
            </StyledFormHeadingWrapper>
          </StyledFormWrapper>
        </StyledWrapper>
        <StyledButtonSecondary type="yellow" to="/join-to-project">
          join to project
        </StyledButtonSecondary>
      </StyledContainer>
    </Layout>
  );
};

export default NewProject;
