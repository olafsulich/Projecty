import React, { useState } from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import usePageWidth from '../../hooks/usePageWidth';

const StyledContainer = styled.div`
  width: 100%;
  height: 10%;
  position: relative;
  top: 0;
  left: 0;

  @media only screen and (min-width: 950px) {
    width: 40%;
    max-width: 33rem;
    height: 100%;
    position: static;
  }
`;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem 2rem 2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const StyledButton = styled.button`
  width: 3rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  z-index: 10;
  padding: 2rem;
  background-color: ${({ theme }) => theme.greenSecondary};
  border-radius: 8px;
`;

const StyledLine = styled.span`
  width: 2.2rem;
  height: 3px;
  margin-top: 3px;
  background-color: ${({ theme }) => theme.greenPrimary};

  :first-of-type {
    margin-top: 0;
  }
`;

const Navigation: React.FC = () => {
  const [isVisible, setVisibility] = useState<boolean>(false);
  const handleChange = () => setVisibility(prevState => !prevState);
  const pageWidth = usePageWidth();
  return (
    <StyledContainer>
      {pageWidth < 950 && (
        <StyledWrapper>
          <StyledButton name="open menu" aria-label="main menu" onClick={handleChange}>
            <StyledLine />
            <StyledLine />
            <StyledLine />
          </StyledButton>
        </StyledWrapper>
      )}
      <Menu isVisible={isVisible} handleChange={handleChange} />
    </StyledContainer>
  );
};

export default Navigation;
