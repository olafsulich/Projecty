import React from 'react';
import { Wrapper, LogoWrapper, Logo, Heading, SignInSVG, SignUpSVG } from './HalfPage.styles';
import { Props } from './HalfPage.types';

const HalfPage: React.FC<Props> = ({ signUp }) => {
  return (
    <Wrapper signUp={signUp}>
      <LogoWrapper to="/">
        <Logo signUp={signUp}>Projecty</Logo>
      </LogoWrapper>
      <Heading signUp={signUp}>Manage your projects and earn more</Heading>
      {signUp ? <SignUpSVG /> : <SignInSVG />}
    </Wrapper>
  );
};

export default HalfPage;
