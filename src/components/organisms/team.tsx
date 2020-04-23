import React from 'react';
import { RouteComponentProps, Link } from '@reach/router';
import PageTemplate from '../../templates/PageTemplate';
import Card from '../atoms/Card';
import Category from '../molecules/Category';
import useTeam from '../../hooks/useTeam';
import { Member } from '../../types';

interface User {
  user: {
    type: string;
    name: string;
    photoURL: string;
  };
}

interface Team {
  team: User[];
}

type Props = RouteComponentProps;

const Team: React.FC<Props> = () => {
  const team = useTeam();
  const projectKey = localStorage.getItem('PROJECT_KEY');

  const cardFuncCreator = (role: string) => {
    if (team) {
      return team
        .filter((doc: Member) => doc.user.type === role)
        .map(({ user: { name, type, photoURL, uid } }: Member) => (
          <Link key={uid} to={`/project/${projectKey}/team/${uid}`}>
            <Card photoURL={photoURL} heading={name} content={type} type={type} />
          </Link>
        ));
    }
    return null;
  };

  return (
    <PageTemplate pageHeading="Team">
      <>
        <Category type="orange" heading="Project Managers">
          {cardFuncCreator('project-manager')}
        </Category>
        <Category type="green" heading="Developers">
          {cardFuncCreator('developer')}
        </Category>
        <Category type="red" heading="Designers">
          {cardFuncCreator('designer')}
        </Category>
        <Category type="blue" heading="Quality Assurance">
          {cardFuncCreator('quality-assurance')}
        </Category>
      </>
    </PageTemplate>
  );
};

export default Team;
