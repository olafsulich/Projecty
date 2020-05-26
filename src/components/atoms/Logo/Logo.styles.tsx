import styled, { css } from 'styled-components';

const StyledLogo = styled.h1<{ signUp?: boolean; newProject?: boolean }>`
  font-size: 2rem;
  font-weight: regular;
  color: ${({ signUp, theme }) => (signUp ? theme.greenPrimary : theme.yellowPrimary)};

  ${({ newProject }) =>
    newProject &&
    css`
      color: ${({ theme }) => theme.pinkPrimary};
    `};
`;

export default StyledLogo;
