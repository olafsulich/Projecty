import styled, { css } from 'styled-components';

const StyledLogo = styled.h1<{ signUp?: boolean; newProject?: boolean }>`
  font-size: 2rem;
  font-weight: regular;
  color: ${({ signUp }) => (signUp ? '#1FC844' : ' #f7b801')};

  ${({ newProject }) =>
    newProject &&
    css`
      color: ${({ theme }) => theme.pinkPrimary};
    `};
`;

export default StyledLogo;
