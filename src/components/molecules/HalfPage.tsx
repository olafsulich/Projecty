import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import { ReactComponent as SignIn } from '../../assets/login.svg';
import { ReactComponent as SignUp } from '../../assets/signup.svg';

const StyledWrapper = styled.section<Props>`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-color: ${({ signUp }) => (signUp ? '#EAFCEE' : '#fff5da')};
  position: relative;
  padding: 8rem 0 15rem 0;
  display: none;

  @media only screen and (min-width: 950px) {
    display: flex;
  }

  @media only screen and (min-width: 1200px) {
    width: 40%;
  }
  @media only screen and (min-width: 1600px) {
    width: 30%;
  }

  @media only screen and (min-width: 1400px) {
    padding: 14rem 0 25rem 0;
  }
`;

const StyledLogoWrapper = styled(Link)`
  position: absolute;
  top: 5%;
  left: 10%;
`;

const StyledLogo = styled.h1<Props>`
  font-size: 2rem;
  font-weight: regular;
  color: ${({ signUp }) => (signUp ? '#1FC844' : '#f7b801')};
`;

const StyledHeading = styled.h2<Props>`
  width: 100%;
  padding: 0 15%;
  font-size: 3rem;
  color: ${({ signUp }) => (signUp ? '#1FC844' : '#c79607')};
  line-height: 4.4rem;
  margin-bottom: 3rem;
`;

const SignInSVG = styled(SignIn)`
  width: 28rem;
  height: 28rem;

  @media only screen and (min-width: 1600px) {
    width: 32rem;
    height: 32rem;
  }
`;

const SignUpSVG = styled(SignUp)`
  width: 28rem;
  height: 28rem;

  @media only screen and (min-width: 1600px) {
    width: 32rem;
    height: 32rem;
  }
`;

interface Props {
  signUp?: boolean;
}

const HalfPage: React.FC<Props> = ({ signUp }) => {
  return (
    <StyledWrapper signUp={signUp}>
      <StyledLogoWrapper to="/">
        <StyledLogo signUp={signUp}>Projecty</StyledLogo>
      </StyledLogoWrapper>
      <StyledHeading signUp={signUp}>Menage your projects and earn more</StyledHeading>
      {signUp ? <SignUpSVG /> : <SignInSVG />}
    </StyledWrapper>
  );
};

export default HalfPage;
