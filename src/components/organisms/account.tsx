import React from 'react';
import styled, { css } from 'styled-components';
import { RouteComponentProps, navigate } from '@reach/router';
import { auth } from '../../firebase/index';
import useUser from '../../hooks/useUser';
import PageTemplate from '../../templates/PageTemplate';
import StyledButton from '../atoms/Button';

const StyledFigure = styled.figure`
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

const StyledRoleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: flex-start;
  margin-bottom: 3rem;
`;

const StyledRole = styled.p<{ heading?: boolean }>`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.textSecondary};

  ${({ heading }) =>
    heading &&
    css`
      color: ${({ theme }) => theme.textPrimary};
      margin-right: 1rem;
    `};
`;

const StyledCard = styled.article`
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

type Props = RouteComponentProps;

const Account: React.FC<Props> = () => {
  const { photoURL, name, email }: any = useUser();

  const handleSignOut = () => {
    auth.signOut();
    localStorage.clear();
    navigate('/sign-in');
  };
  return (
    <>
      <PageTemplate pageHeading="Account">
        <StyledCard>
          <StyledFigure>
            <figcaption>Photo:</figcaption>
            <img src={photoURL} alt={name} />
          </StyledFigure>
          <StyledRoleWrapper>
            <StyledRole heading>Name:</StyledRole>
            <StyledRole>{name}</StyledRole>
          </StyledRoleWrapper>
          <StyledRoleWrapper>
            <StyledRole heading>Email:</StyledRole>
            <StyledRole>{email}</StyledRole>
          </StyledRoleWrapper>
          <StyledButton color="green" onClick={handleSignOut}>
            logout
          </StyledButton>
        </StyledCard>
      </PageTemplate>
    </>
  );
};

export default Account;
