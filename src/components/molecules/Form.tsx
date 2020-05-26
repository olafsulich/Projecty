import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import StyledHeading from '../atoms/Heading';
import StyledLabel from '../atoms/Label';
import StyledInput from '../atoms/Input';
import StyledButton from '../atoms/Button/Button';
import StyledLabelInputWrapper from '../atoms/LabelInputWrapper';

const StyledFormWrapper = styled.main`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
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

const StyledInfoButton = styled(Link)<Props>`
  text-decoration: none;
  position: relative;
  margin-left: 0.6rem;
  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 50%;
    background-color: ${({ signup, theme }) => (signup ? theme.greenSecondary : theme.yellowSecondary)};
    z-index: -1;
    top: 60%;
    left: 15%;
  }
`;

interface Props {
  signup?: boolean;
  newProject?: boolean;
}

const Form: React.FC<Props> = ({ signup, newProject }) => {
  return (
    <StyledFormWrapper>
      <StyledFormHeadingWrapper>
        {newProject ? (
          <StyledHeading formHeading>Start a new project</StyledHeading>
        ) : (
          <StyledHeading formHeading>{signup ? 'Sign up to Projecty' : 'Sign in to Projecty'}</StyledHeading>
        )}
        <StyledForm>
          {signup ? (
            <StyledLabelInputWrapper>
              <StyledLabel>Full Name</StyledLabel>
              <StyledInput signup={signup} />
            </StyledLabelInputWrapper>
          ) : null}
          {newProject ? (
            <>
              <StyledLabelInputWrapper>
                <StyledLabel>Name</StyledLabel>
                <StyledInput newProject />
              </StyledLabelInputWrapper>
              <StyledLabelInputWrapper>
                <StyledLabel>Key</StyledLabel>
                <StyledInput newProject />
              </StyledLabelInputWrapper>
            </>
          ) : (
            <>
              <StyledLabelInputWrapper>
                <StyledLabel>Email Adress</StyledLabel>
                <StyledInput signup={signup} />
              </StyledLabelInputWrapper>
              <StyledLabelInputWrapper>
                <StyledLabel>Password</StyledLabel>
                {signup ? <StyledInput placeholder="6+ characters" signup={signup} /> : <StyledInput signup={signup} />}
              </StyledLabelInputWrapper>
            </>
          )}

          <StyledButtonWrapper>
            {newProject ? (
              <StyledButton color="pink" type="submit">
                Add
              </StyledButton>
            ) : (
              <StyledButton color={signup ? 'green' : 'yellow'} type="submit">
                {signup ? 'Sign up' : 'Sign in'}
              </StyledButton>
            )}

            <StyledInfo>
              Haven't got account?
              <StyledInfoButton to={signup ? '/sign-in' : '/sign-up'} signup={signup}>
                {signup ? 'Sign in' : 'Sign up'}
              </StyledInfoButton>
            </StyledInfo>
          </StyledButtonWrapper>
        </StyledForm>
      </StyledFormHeadingWrapper>
    </StyledFormWrapper>
  );
};

export default Form;
