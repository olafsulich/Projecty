import { Link } from '@reach/router';
import styled from 'styled-components';
import { media } from '../../utils/media';
import { Props } from './ProjectFormTemplate.types';

const FormWrapper = styled.main`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 7rem;
  margin-bottom: 3rem;
`;

const FormHeadingWrapper = styled.div<Props>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: ${({ projectsList }) => (projectsList ? 'flex-start' : 'center')};
  justify-content: flex-start;
  flex-direction: column;

  ${media.sm`
    width: auto;
    min-width: 40rem;
    justify-content: center;
    height: 100%;
    padding-left: 3rem;
  `}

  ${media.md`
    min-width: 40rem;
  `}

  ${media.xl`
    min-width: 45rem;
  `}

  ${media.xxl`
    min-width: 50rem;
  `}
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 3rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  overflow: hidden;

  ${media.sm`
    padding: 0;
  `}
`;

const Wrapper = styled.section`
  width: 100%;
  max-width: 40rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

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
  position: absolute;
  top: 7%;
  left: 4%;
`;

const ButtonSecondary = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 5%;
  right: 4%;
  height: 4.3rem;
  width: 13rem;
  background-color: ${({ theme }) => theme.pinkSecondary};
  color: ${({ theme }) => theme.pinkPrimary};
  font-size: 1.6rem;
  font-weight: 700;
  border-radius: 10px;
`;

const Form = styled.form`
  margin-top: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  ${media.sm`
    justify-content: center;
  `}
`;

const LabelInputWrapper = styled.fieldset`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 5rem;
  border: none;

  ${media.sm`
    align-items: center;
  `}
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const Button = styled.button<Props>`
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
  
  ${media.sm`
    width: 35%;
  `}

  ${media.md`
    font-size: 1.5rem;
    width: 45%;
  `}

  ${media.xxl`
    width: 55%;
  `}
`;

const Info = styled.p`
  width: 100%;
  text-align: center;
  font-size: 1.4rem;
`;

const InfoButton = styled(Link)<Props>`
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

export {
  FormWrapper,
  FormHeadingWrapper,
  Container,
  Wrapper,
  LogoWrapper,
  ButtonSecondary,
  Form,
  LabelInputWrapper,
  ButtonWrapper,
  Button,
  Info,
  InfoButton,
};
