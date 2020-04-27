import React from 'react';
import { Link, navigate, RouteComponentProps } from '@reach/router';
import { Formik } from 'formik';
import styled from 'styled-components';
import { auth } from '../firebase/index';
import FormTemplate from '../templates/FormTemplate';
import StyledHeading from '../components/atoms/Heading';
import StyledLabel from '../components/atoms/Label';
import StyledInput from '../components/atoms/Input';
import { createUserDoc } from '../firebase/utils';
// import usePageWidth from '../hooks/usePageWidth';
import StyledButton from '../components/atoms/Button';
import StyledLabelInputWrapper from '../components/atoms/LabelInputWrapper';

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
    background-color: ${({ theme }) => theme.greenSecondary};
    z-index: -1;
    top: 60%;
    left: 15%;
  }
`;
type Props = RouteComponentProps;

const SignUp: React.FC<Props> = () => {
  // const pageWidth = usePageWidth();

  const handleSignUp = async (email: string, password: string, name: string) => {
    if (auth) {
      await auth.createUserWithEmailAndPassword(email, password).then(() => {
        const user = auth.currentUser;
        createUserDoc(user, name);
        navigate('/start-new-project');
      });
    }
  };

  return (
    <Formik
      initialValues={{ email: '', password: '', name: '' }}
      onSubmit={({ email, password, name }) => handleSignUp(email, password, name)}
    >
      {({ values: { email, password, name }, handleChange, handleBlur, handleSubmit }) => {
        return (
          <FormTemplate signUp>
            <StyledFormWrapper>
              <StyledFormHeadingWrapper>
                <StyledHeading form>Sign up to Projecty</StyledHeading>
                <StyledForm onSubmit={handleSubmit}>
                  <StyledLabelInputWrapper>
                    <StyledLabel htmlFor="name">Full Name</StyledLabel>
                    <StyledInput
                      signup
                      id="name"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="name"
                      value={name}
                      aria-label="name"
                      aria-required="true"
                      autoComplete="new-password"
                    />
                  </StyledLabelInputWrapper>

                  <StyledLabelInputWrapper>
                    <StyledLabel htmlFor="email">Email Adress</StyledLabel>
                    <StyledInput
                      signup
                      id="email"
                      type="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="email"
                      value={email}
                      aria-label="email"
                      aria-required="true"
                      autoComplete="new-password"
                    />
                  </StyledLabelInputWrapper>
                  <StyledLabelInputWrapper>
                    <StyledLabel htmlFor="password">Password</StyledLabel>
                    <StyledInput
                      type="password"
                      placeholder="6+ characters"
                      signup
                      id="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="password"
                      value={password}
                      aria-label="password"
                      aria-required="true"
                      autoComplete="new-password"
                    />
                  </StyledLabelInputWrapper>

                  <StyledButtonWrapper>
                    <StyledButton color="green" type="submit">
                      Sign up
                    </StyledButton>
                    <StyledInfo>
                      Haven't got account?
                      <StyledInfoButton to="/sign-in">Sign in</StyledInfoButton>
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
export default SignUp;
