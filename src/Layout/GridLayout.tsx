import React from 'react';
import styled, { css } from 'styled-components';
import { media } from '../utils/media';

const StyledGrid = styled.div<Props>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  align-items: flex-start;
  justify-items: center;
  align-content: center;
  justify-content: center;
  grid-gap: 3rem;
  margin-top: 4rem;
  padding: 0 2rem;
  position: relative;

  ${media.s`
    justify-items: flex-start;
    padding: 0 0 0 4rem;
  `}

  ${media.sm`
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    padding: 0 0 0 8rem;
  `}

  ${({ statistics }) =>
    statistics &&
    css`
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
      align-items: flex-start;
      justify-items: center;
      align-content: center;
      justify-content: center;
      grid-gap: 3rem;
      margin-top: 8rem;
    `};
`;

interface Props {
  statistics?: boolean;
}

const GridLayout: React.FC<Props> = ({ children, statistics }) => <StyledGrid statistics={statistics}>{children}</StyledGrid>;

export default GridLayout;
