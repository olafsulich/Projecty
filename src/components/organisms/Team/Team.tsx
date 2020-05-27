import React from 'react';
import { RouteComponentProps } from '@reach/router';
import PageTemplate from '../../../templates/PageTemplate';
import Card from '../../atoms/Card/Card';
import Category from '../../molecules/Category/Category';
import useTeam from '../../../hooks/useTeam';
import { Member } from '../../../types';
import { types } from '../../../state/enums';
import { teamInfo } from '../../../data/projectPagesData';
import { TeamLink } from './Team.styles';

const Team: React.FC<RouteComponentProps> = () => {
  const team = useTeam();
  const { PROJECT_KEY } = types;
  const projectKey = localStorage.getItem(PROJECT_KEY);

  const cardFuncCreator = (role: string) => {
    if (team) {
      return team
        .filter((doc: Member) => doc.user.type === role)
        .map(({ user: { name, type, photoURL, uid } }: Member) => (
          <TeamLink key={uid} to={`/project/${projectKey}/team/${uid}`}>
            <Card photoURL={photoURL} heading={name} content={type} type={type} />
          </TeamLink>
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
