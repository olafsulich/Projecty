import styled, { css } from 'styled-components';
import { media } from '../../../utils/media';

const Heading = styled.h2<{ formHeading?: boolean }>`
  ${({ formHeading }) =>
    formHeading &&
    css`
      width: 100%;
      text-align: left;
      font-size: 3rem;
      color: ${({ theme }) => theme.textPrimary};

      ${media.md`
        font-size: 3.6rem;
        margin-bottom: 2rem; 
      `}

      ${media.lg`
        font-size: 4rem;
      `}

      ${media.xxl`
        font-size: 4.6rem;
      `}
    `};
`;

export default Heading;
