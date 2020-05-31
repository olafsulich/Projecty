import styled, { css } from 'styled-components';
import { Props } from './Menu.types';
import { media } from '../../../utils/media';

const Wrapper = styled.nav<Props>`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 3rem 2rem 5rem 2rem;
  top: 0;
  left: 0;
  will-change: opacity, transform;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  z-index: ${({ isVisible }) => (isVisible ? '10' : '-1')};
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transform: translateX(${({ isVisible }) => (isVisible ? '0%' : '-100%')});
  transition: opacity 0.7s ease-in-out, transform 0.7s ease-in-out;
  background-color: #fff;

  ${media.sm`
    position: static;
  `}
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Button = styled.button`
  width: 3rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  z-index: 2;
  padding: 2rem;
  background-color: ${({ theme }) => theme.greenSecondary};
  border-radius: 8px;
  position: relative;

  ::after,
  ::before {
    content: '';
    position: absolute;
    width: 2.2rem;
    height: 3px;
    margin-top: 3px;
    background-color: ${({ theme }) => theme.greenPrimary};
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

const List = styled.ul<{ secondary?: boolean }>`
  margin-top: 2rem;
  list-style: none;
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 2rem;

  ${media.sm`
     padding: 5rem 2rem;
  `}

  ${({ secondary }) =>
    secondary &&
    css`
      height: 20%;
      ${media.sm`
        padding-bottom: 0;
      `}
    `};
`;

const LogoWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 3rem 2rem;
`;

export { Wrapper, ButtonWrapper, Button, List, LogoWrapper };
