import styled from 'styled-components';
import Heading from '../../components/atoms/Heading/Heading.styles';

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

const NotFoundHeading = styled(Heading)`
  font-size: 3.5rem;
  margin-bottom: 8rem;
`;

export { FormWrapper, FormHeadingWrapper, NotFoundHeading };
