import React from 'react';
import { RouteComponentProps, Link } from '@reach/router';
import PageTemplate from '../../templates/PageTemplate';
import Card from '../atoms/Card';
import Category from '../molecules/Category';
import useSprints from '../../hooks/useSprints';

type Props = RouteComponentProps;

const Backlog: React.FC<Props> = () => {
  const sprints: any = useSprints();
  const projectKey = localStorage.getItem('PROJECT_KEY');

  const cardFuncCreator = (cardType: string) => {
    if (sprints) {
      return sprints
        .filter((doc: { type: string }) => doc.type === cardType)
        .map(({ type, content, id, user: { name, photoURL } }: any) => (
          <Link key={id} to={`/project/${projectKey}/sprints/${id}`}>
            <Card photoURL={photoURL} heading={name} content={content} type={type} />
          </Link>
        ));
    }
    return null;
  };

  return (
    <PageTemplate pageHeading="Sprints">
      <Category type="orange" heading="To do">
        {cardFuncCreator('To do')}
      </Category>
      <Category type="green" heading="In progress">
        {cardFuncCreator('In progress')}
      </Category>
      <Category type="red" heading="Finished">
        {cardFuncCreator('Finished')}
      </Category>
    </PageTemplate>
  );
};

export default Backlog;
