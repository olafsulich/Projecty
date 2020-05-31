import React from 'react';
import { RouteComponentProps } from '@reach/router';
import PageTemplate from '../../../templates/PageTemplate/PageTemplate';
import Category from '../../molecules/Category/Category';
import useSprints from '../../../hooks/useSprints';
import { sprintsInfo } from '../../../data/projectPagesData';
import cardFuncCreator from '../../molecules/CardFuncCreator/CardFuncCreator';

const Backlog: React.FC<RouteComponentProps> = () => {
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
