import React from 'react';
import { RouteComponentProps, Link } from '@reach/router';
import PageTemplate from '../../templates/PageTemplate';
import Card from '../atoms/Card';
import Category from '../molecules/Category';
import useBacklog from '../../hooks/useBacklog';
import { Backlog } from '../../types';

type Props = RouteComponentProps;

const Backlog: React.FC<Props> = () => {
  const backlog = useBacklog();
  const projectKey = localStorage.getItem('PROJECT_KEY');

  const cardFuncCreator = (cardType: string) => {
    if (backlog) {
      return backlog
        .filter((doc: Backlog) => doc.type === cardType)
        .map(({ type, content, id, user: { name, photoURL } }: Backlog) => (
          <Link key={id} to={`/project/${projectKey}/backlog/${id}`}>
            <Card photoURL={photoURL} heading={name} content={content} type={type} />
          </Link>
        ));
    }
    return null;
  };

  return (
    <PageTemplate pageHeading="Backlog">
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
