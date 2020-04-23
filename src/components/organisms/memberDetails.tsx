import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { RouteComponentProps, useParams } from '@reach/router';
import useTeam from '../../hooks/useTeam';
import CardDetailsTemplate from '../../templates/CardDetailsTemplate';
import { Member } from '../../types';

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
    margin-right: 1.4rem;
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

type Props = RouteComponentProps;

const MemberDetails: React.FC<Props> = () => {
  const [member, setMember] = useState<Member>();
  const { id } = useParams();
  const team = useTeam();

  const matchedUser = team.find((doc: Member) => doc.user.uid === id);

  useEffect(() => {
    setMember(matchedUser);
  }, []);

  const cardDetail = () => {
    if (member) {
      const {
        user: { photoURL, name, type, email },
      } = member;
      return (
        <>
          <StyledFigure>
            <img src={photoURL} alt={name} />
            <figcaption>{name}</figcaption>
          </StyledFigure>
          <StyledRoleWrapper>
            <StyledRole heading>Type:</StyledRole>
            <StyledRole>{type}</StyledRole>
          </StyledRoleWrapper>
          <StyledRoleWrapper>
            <StyledRole heading>Email:</StyledRole>
            <StyledRole>{email}</StyledRole>
          </StyledRoleWrapper>
        </>
      );
    }
    return null;
  };

  return <CardDetailsTemplate>{member ? cardDetail() : null}</CardDetailsTemplate>;
};

export default MemberDetails;
