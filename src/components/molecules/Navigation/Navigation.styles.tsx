import styled from 'styled-components';
import { media } from '../../../utils/media';

const Container = styled.div`
  width: 100%;
  height: 10%;
  position: relative;
  top: 0;
  left: 0;

  ${media.sm`
    width: 40%;
    max-width: 33rem;
    height: 100%;
    position: static;
  `}
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem 2rem 2rem 2rem;
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
  z-index: 10;
  padding: 2rem;
  background-color: ${({ theme }) => theme.greenSecondary};
  border-radius: 8px;
`;

const Line = styled.span`
  width: 2.2rem;
  height: 3px;
  margin-top: 3px;
  background-color: ${({ theme }) => theme.greenPrimary};

  :first-of-type {
    margin-top: 0;
  }
`;

export { Container, Wrapper, Button, Line };
