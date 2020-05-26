import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import Layout from '../Layout/Layout';
import HalfPage from '../components/molecules/HalfPage';
import StyledLogo from '../components/atoms/Logo/Logo.styles';
import usePageWidth from '../hooks/usePageWidth';

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 3rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media only screen and (min-width: 950px) {
    padding: 0;
  }
`;

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 40rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  position: relative;

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
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 3rem;

  @media only screen and (min-width: 950px) {
    display: none;
  }
`;

const StyledButtonSecondary = styled(Link)<Props>`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 5%;
  right: 4%;
  height: 4.3rem;
  width: 10rem;
  background-color: ${({ signUp }) => (signUp ? '#EAFCEE' : '#fff5da')};
  color: ${({ signUp }) => (signUp ? '#1FC844' : ' #f7b801')};
  font-size: 1.6rem;
  font-weight: 700;
  border-radius: 10px;

  display: none;
  @media only screen and (min-width: 950px) {
    display: flex;
  }
`;

interface Props {
  signUp?: boolean;
}

const FormTemplate: React.FC<Props> = ({ signUp, children }) => {
  const pageWidth = usePageWidth();
  return (
    <Layout>
      <StyledContainer>
        {pageWidth >= 950 ? <HalfPage signUp={signUp} /> : null}
        <StyledWrapper>
          {pageWidth >= 950 ? null : (
            <StyledLogoWrapper to="/">
              <StyledLogo signUp={signUp}>Projecty</StyledLogo>
            </StyledLogoWrapper>
          )}
          {pageWidth >= 950 ? (
            <StyledButtonSecondary to={signUp ? '/sign-in' : '/sign-up'} signUp={signUp}>
              {signUp ? 'Sign in' : 'Sign up'}
            </StyledButtonSecondary>
          ) : null}

          {children}
        </StyledWrapper>
      </StyledContainer>
    </Layout>
  );
};

export default FormTemplate;
