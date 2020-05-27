import React from 'react';
import { RouteComponentProps } from '@reach/router';
import PageTemplate from '../../templates/PageTemplate';
import TeamChart from '../molecules/TeamChart/TeamChart';
import BarDataChart from '../molecules/BarChart/BarChart';

type Props = RouteComponentProps;

const Statistics: React.FC<Props> = () => (
  <PageTemplate pageHeading="Statistics">
    <TeamChart />
    <BarDataChart barType="backlog" />
    <BarDataChart barType="sprint" />
  </PageTemplate>
);

export default Statistics;
