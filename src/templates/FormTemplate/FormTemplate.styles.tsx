import styled from 'styled-components';
import { Link } from '@reach/router';
import { media } from '../../utils/media';
import { Props } from './FormTemplate.types';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 3rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  ${media.sm`
    padding: 0;
  `}
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 40rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  position: relative;

  ${media.sm`
    height: 100%;
    width: 50%;
    justify-content: center;
    padding: 3rem 2rem;
    max-width: 50%;
  `}

  ${media.md`
    width: 60%;
    max-width: 60%;
  `}

  ${media.xxl`
    width: 70%;
    max-width: 70%;
  `}
`;

const LogoWrapper = styled(Link)`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 3rem;

  ${media.sm`
    display: none;
  `}
`;

const ButtonSecondary = styled(Link)<Props>`
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

  ${media.sm`
    display: flex;
  `}
`;

export { Wrapper, Container, LogoWrapper, ButtonSecondary };
