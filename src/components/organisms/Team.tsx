import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps, Link } from '@reach/router';
import PageTemplate from '../../templates/PageTemplate';
import Card from '../atoms/Card/Card';
import Category from '../molecules/Category/Category';
import useTeam from '../../hooks/useTeam';
import { Member } from '../../types';
import { types } from '../../state/enums';
import { teamInfo } from '../../data/projectPagesData';

const StyledLink = styled(Link)`
  :focus {
    div {
      border: 2px solid ${({ theme }) => theme.typeCardSecondary};
    }
  }
`;
type Props = RouteComponentProps;

const Team: React.FC<Props> = () => {
  const team = useTeam();
  const { PROJECT_KEY } = types;
  const projectKey = localStorage.getItem(PROJECT_KEY);

  const cardFuncCreator = (role: string) => {
    if (team) {
      return team
        .filter((doc: Member) => doc.user.type === role)
        .map(({ user: { name, type, photoURL, uid } }: Member) => (
          <StyledLink key={uid} to={`/project/${projectKey}/team/${uid}`}>
            <Card photoURL={photoURL} heading={name} content={type} type={type} />
          </StyledLink>
        ));
    }
    return null;
  };

  return (
    <PageTemplate pageHeading="Team">
      {teamInfo.map(({ type, heading, key }) => (
        <Category key={type} type={type} heading={heading}>
          {cardFuncCreator(key)}
        </Category>
      ))}
    </PageTemplate>
  );
};

export default Team;
