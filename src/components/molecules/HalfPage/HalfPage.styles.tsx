import styled from 'styled-components';
import { Link } from '@reach/router';
import { ReactComponent as SignIn } from '../../../assets/login.svg';
import { ReactComponent as SignUp } from '../../../assets/signup.svg';
import { Props } from './HalfPage.types';
import { media } from '../../../utils/media';

const Wrapper = styled.section<Props>`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-color: ${({ signUp, theme }) => (signUp ? theme.greenSecondary : theme.yellowSecondary)};
  position: relative;
  padding: 8rem 0 15rem 0;
  display: none;

  ${media.sm`
    display: flex;
  `}

  ${media.md`
    width: 40%;
  `}

  ${media.xl`
    padding: 14rem 0 25rem 0;
  `}

  ${media.xxl`
    width: 30%;
  `}
`;

const LogoWrapper = styled(Link)`
  position: absolute;
  top: 5%;
  left: 10%;
`;

const Logo = styled.h1<Props>`
  font-size: 2rem;
  font-weight: regular;
  color: ${({ signUp, theme }) => (signUp ? theme.greenPrimary : theme.yellowPrimary)};
`;

const Heading = styled.h2<Props>`
  width: 100%;
  padding: 0 15%;
  font-size: 3rem;
  color: ${({ signUp, theme }) => (signUp ? theme.greenPrimary : theme.headingYellow)};
  line-height: 4.4rem;
  margin-bottom: 3rem;
`;

const SignInSVG = styled(SignIn)`
  width: 28rem;
  height: 28rem;

  ${media.xxl`
    width: 32rem;
    height: 32rem;
  `}
`;

const SignUpSVG = styled(SignUp)`
  width: 28rem;
  height: 28rem;

  ${media.xxl`
    width: 32rem;
    height: 32rem;
  `}
`;

export { Wrapper, LogoWrapper, Logo, Heading, SignInSVG, SignUpSVG };
