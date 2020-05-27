import styled, { css } from 'styled-components';

const Figure = styled.figure`
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: flex-start;
  margin-bottom: 3rem;

  img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    margin-left: 1.4rem;
  }

  figcaption {
    font-size: 1.8rem;
  }
`;

const RoleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: flex-start;
  margin-bottom: 3rem;
`;

const Role = styled.p<{ heading?: boolean }>`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.textSecondary};

  ${({ heading }) =>
    heading &&
    css`
      color: ${({ theme }) => theme.textPrimary};
      margin-right: 1rem;
    `};
`;

const Card = styled.article`
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

export { Figure, RoleWrapper, Role, Card };
