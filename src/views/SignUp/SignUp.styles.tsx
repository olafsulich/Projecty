import styled from 'styled-components';
import { Link } from '@reach/router';

const FormWrapper = styled.main`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormHeadingWrapper = styled.section`
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

const Form = styled.form`
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
  @media only screen and (min-width: 950px) {
    display: none;
  }
`;

const InfoButton = styled(Link)`
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

export { FormWrapper, FormHeadingWrapper, Form, ButtonWrapper, Info, InfoButton };
