import React from 'react';
import { Link, navigate, RouteComponentProps } from '@reach/router';
import { Formik } from 'formik';
import styled from 'styled-components';
import { auth } from '../firebase/index';
import FormTemplate from '../templates/FormTemplate';
import StyledHeading from '../components/atoms/Heading';
import StyledLabel from '../components/atoms/Label';
import StyledInput from '../components/atoms/Input';
import StyledButton from '../components/atoms/Button/Button';
import StyledLabelInputWrapper from '../components/atoms/LabelInputWrapper';
import ErrorMessage from '../components/atoms/ErrorMessage';

const StyledFormWrapper = styled.main`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledFormHeadingWrapper = styled.section`
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

const StyledButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
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
    background-color: ${({ theme }) => theme.yellowSecondary};
    z-index: -1;
    top: 60%;
    left: 15%;
  }
`;

type Props = RouteComponentProps;

const SignIn: React.FC<Props> = () => {
  const handleSignIn = async (email: string, password: string) => {
    if (auth)
      await auth
        .signInWithEmailAndPassword(email, password)
        .then(() => navigate(`/projects`))
        .catch(() => alert(`Email is already in use, sign in or use other email`));
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={({ email, password }) => {
        const errors: Partial<{ email: string; password: string }> = {};
        if (!email) {
          errors.email = 'Email is required';
        } else if (!password) {
          errors.password = 'Password is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
          errors.email = 'Invalid email address';
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/i.test(password)) {
          errors.password = 'Password should contain min. 6 characters and one number';
        }
        return errors;
      }}
      onSubmit={({ email, password }) => handleSignIn(email, password)}
    >
      {({ values: { email, password }, handleChange, handleBlur, handleSubmit, errors }) => {
        return (
          <FormTemplate>
            <StyledFormWrapper>
              <StyledFormHeadingWrapper>
                <StyledHeading formHeading>Sign in to Projecty</StyledHeading>
                <StyledForm onSubmit={handleSubmit}>
                  <StyledLabelInputWrapper>
                    <StyledLabel htmlFor="email">Email Adress</StyledLabel>
                    <StyledInput
                      id="email"
                      type="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="email"
                      value={email}
                      aria-label="email"
                      aria-required="true"
                      aria-invalid={errors.email ? 'true' : 'false'}
                      autoComplete="new-password"
                    />
                    {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                  </StyledLabelInputWrapper>
                  <StyledLabelInputWrapper>
                    <StyledLabel htmlFor="password">Password</StyledLabel>
                    <StyledInput
                      type="password"
                      id="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="password"
                      value={password}
                      aria-label="password"
                      aria-required="true"
                      aria-invalid={errors.password ? 'true' : 'false'}
                      autoComplete="new-password"
                    />
                    {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
                  </StyledLabelInputWrapper>

                  <StyledButtonWrapper>
                    <StyledButton color="yellow" type="submit">
                      Sign in
                    </StyledButton>

                    <StyledInfo>
                      Haven't got account?
                      <StyledInfoButton to="/sign-up">Sign up</StyledInfoButton>
                    </StyledInfo>
                  </StyledButtonWrapper>
                </StyledForm>
              </StyledFormHeadingWrapper>
            </StyledFormWrapper>
          </FormTemplate>
        );
      }}
    </Formik>
  );
};

export default SignIn;
