import React from 'react';
import styled from 'styled-components';
import Heading from '../components/atoms/Heading';

const StyledModal = styled.div<{ modalTheme?: string }>`
  position: absolute;
  background-color: #fff;
  z-index: 101;
  height: 100%;
  width: 100%;
  border: 6px solid ${({ modalTheme }) => (modalTheme === 'green' ? '#eafcee' : '#fff5da ')};
  border-radius: 10px;
  top: 0;
  left: 0;

  @media only screen and (min-width: 550px) {
    height: 68rem;
    width: 54rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 5rem 4rem;
`;

const StyledButtonClose = styled.button`
  width: 3rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  z-index: 2;
  padding: 2rem;
  position: fixed;
  top: 5%;
  right: 5%;
  background-color: transparent;
  border-radius: 7px;
  :focus,
  :hover {
    background-color: ${({ theme }) => theme.greenSecondary};
  }
  ::after,
  ::before {
    content: '';
    position: absolute;
    width: 2.2rem;
    background-color: black;
    height: 3px;
    margin-top: 3px;
    top: 16px;
  }

  ::before {
    transform: rotate(-45deg);
    right: 9px;
  }

  ::after {
    transform: rotate(45deg);
    left: 9px;
  }
`;

const StyledHeadingWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 4rem;
`;

const StyledHeading = styled(Heading)`
  font-size: 3rem;
`;

interface Props {
  toggleVisibility: () => void;
  title: string;
  modalTheme?: string;
  isVisible: boolean;
}

const ModalTemplate: React.FC<Props> = ({ toggleVisibility, children, title, modalTheme, isVisible }) => {
  return (
    <StyledModal modalTheme={modalTheme} aria-hidden={!isVisible} aria-expanded={isVisible} tabIndex={isVisible ? 0 : -1}>
      <StyledWrapper>
        <StyledButtonClose role="img" aria-label="close modal" onClick={() => toggleVisibility()} />
        <StyledHeadingWrapper>
          <StyledHeading>{title}</StyledHeading>
        </StyledHeadingWrapper>
        {children}
      </StyledWrapper>
    </StyledModal>
  );
};

export default ModalTemplate;
