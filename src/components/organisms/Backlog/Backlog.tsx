import React from 'react';
import { RouteComponentProps } from '@reach/router';
import PageTemplate from '../../../templates/PageTemplate';
import Category from '../../molecules/Category/Category';
import useBacklog from '../../../hooks/useBacklog';
import { backlogsInfo } from '../../../data/projectPagesData';
import cardFuncCreator from '../../molecules/CardFuncCreator/CardFuncCreator';

const Backlog: React.FC<RouteComponentProps> = () => {
  const backlog = useBacklog();

  return (
    <PageTemplate pageHeading="Backlog">
      {backlogsInfo.map(({ type, heading }) => (
        <Category key={type} type={type} heading={heading}>
          {cardFuncCreator(heading, backlog, 'backlog')}
        </Category>
      ))}
    </PageTemplate>
  );
};

export default Backlog;
