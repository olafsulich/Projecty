import React from 'react';
import { RouteComponentProps } from '@reach/router';
import PageTemplate from '../../templates/PageTemplate';
import Category from '../molecules/Category';
import useSprints from '../../hooks/useSprints';
import { sprintsInfo } from '../../data/projectPagesData';
import cardFuncCreator from '../molecules/CardFuncCreator';

type Props = RouteComponentProps;

const Backlog: React.FC<Props> = () => {
  const sprints = useSprints();

  return (
    <PageTemplate pageHeading="Sprints">
      {sprintsInfo.map(({ type, heading }) => (
        <Category key={type} type={type} heading={heading}>
          {cardFuncCreator(heading, sprints, 'sprints')}
        </Category>
      ))}
    </PageTemplate>
  );
};

export default Backlog;
