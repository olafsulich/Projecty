import styled from 'styled-components';
import Heading from '../../components/atoms/Heading/Heading.styles';
import { media } from '../../utils/media';

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

const NotFoundHeading = styled(Heading)`
  font-size: 3.5rem;
  margin-bottom: 8rem;
`;

export { FormWrapper, FormHeadingWrapper, NotFoundHeading };
