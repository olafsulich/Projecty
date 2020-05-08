import React from 'react';
import styled from 'styled-components';
import Layout from '../Layout/Layout';
import { ReactComponent as Morphing } from '../assets/morphing.svg';
import Navigation from '../components/molecules/Navigation';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #fbfbfb;
  padding-top: 5rem;
  overflow-x: hidden;

  @media only screen and (min-width: 950px) {
    padding-top: 10rem;
    position: relative;
  }
`;

const StyledContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #fbfbfb;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  @media only screen and (min-width: 950px) {
    flex-direction: row;
  }
`;

const StyledMorph = styled(Morphing)`
  width: 10rem;
  height: 10rem;
  position: absolute;
  top: 0;
  left: 0;

  @media only screen and (min-width: 950px) {
    display: none;
  }
`;

const StyledCard = styled.article`
  width: 100%;
  max-width: 70rem;
  border-radius: 7px;
  box-shadow: 3px 6px 10px ${({ theme }) => theme.cardShadow};
  display: flex;
  align-items: flex-start;
  justify-items: flex-start;
  flex-direction: column;
  padding: 4rem 3rem;
`;

const CardDetailsTemplate: React.FC = ({ children }) => (
  <Layout>
    <StyledContainer>
      <Navigation />
      <StyledMorph />
      <StyledWrapper>
        <StyledCard>{children}</StyledCard>
      </StyledWrapper>
    </StyledContainer>
  </Layout>
);

export default CardDetailsTemplate;
