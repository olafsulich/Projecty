import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps, navigate } from '@reach/router';
import FormTemplate from '../../templates/FormTemplate';
import Heading from '../atoms/Heading';
import StyledButton from '../atoms/Button';

const StyledFormWrapper = styled.main`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledFormHeadingWrapper = styled.section`
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

const StyledHeading = styled(Heading)`
  font-size: 3.5rem;
  margin-bottom: 8rem;
`;

type Props = RouteComponentProps;

const NotFoundPage: React.FC<Props> = () => (
  <FormTemplate>
    <StyledFormWrapper>
      <StyledFormHeadingWrapper>
        <StyledHeading>Something goes wrong</StyledHeading>
        <StyledButton color="yellow" onClick={() => navigate(-1)}>
          go back
        </StyledButton>
      </StyledFormHeadingWrapper>
    </StyledFormWrapper>
  </FormTemplate>
);

export default NotFoundPage;
