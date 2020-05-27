import styled, { css } from 'styled-components';

const Heading = styled.h2<{ formHeading?: boolean }>`
  ${({ formHeading }) =>
    formHeading &&
    css`
      width: 100%;
      text-align: left;
      font-size: 3rem;
      color: ${({ theme }) => theme.textPrimary};
      @media only screen and (min-width: 1150px) {
        font-size: 3.6rem;
        margin-bottom: 2rem;
      }

      @media only screen and (min-width: 1300px) {
        font-size: 4rem;
      }

      @media only screen and (min-width: 1600px) {
        font-size: 4.6rem;
      }
    `};
`;

export default Heading;
