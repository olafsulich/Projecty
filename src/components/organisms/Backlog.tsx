import React from 'react';
import { RouteComponentProps } from '@reach/router';
import PageTemplate from '../../templates/PageTemplate';
import Category from '../molecules/Category';
import useBacklog from '../../hooks/useBacklog';
import { backlogsInfo } from '../../data/projectPagesData';
import cardFuncCreator from '../molecules/CardFuncCreator';

type Props = RouteComponentProps;

const Backlog: React.FC<Props> = () => {
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
