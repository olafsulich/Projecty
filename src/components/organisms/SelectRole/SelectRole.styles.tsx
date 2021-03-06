import styled from 'styled-components';
import { Link } from '@reach/router';
import Heading from '../../atoms/Heading/Heading.styles';
import { media } from '../../../utils/media';

const FormWrapper = styled.main`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 7rem;
  margin-bottom: 3rem;
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
    min-width: 55rem;
    justify-content: center;
    height: 100%;
    padding-left: 3rem;
  `}

  ${media.md`
    min-width: 65rem;
  `}

  ${media.xl`
    min-width: 75rem;
  `}

  ${media.xxl`
    min-width: 85rem;
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

const Form = styled.div`
  margin-top: 6rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  align-items: center;
  justify-items: center;
  align-content: center;
  justify-content: center;
  grid-row-gap: 2rem;
  grid-column-gap: 1rem;
`;

const RoleHeading = styled(Heading)`
  margin-left: 4rem;
`;

export { FormWrapper, FormHeadingWrapper, Container, Wrapper, LogoWrapper, Form, RoleHeading };
