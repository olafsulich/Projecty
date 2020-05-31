import styled from 'styled-components';
import { Link } from '@reach/router';
import { media } from '../../../utils/media';

const FormContainer = styled.main`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormHeadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
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

const FormWrapper = styled.form`
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

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const Info = styled.p`
  width: 100%;
  text-align: center;
  font-size: 1.4rem;

  ${media.sm`
    display: none;
  `}
`;

const InfoButton = styled(Link)<{ signup?: boolean }>`
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

export { FormContainer, FormHeadingWrapper, FormWrapper, ButtonWrapper, Info, InfoButton };
