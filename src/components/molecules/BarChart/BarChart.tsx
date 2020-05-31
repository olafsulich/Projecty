import React from 'react';
import { Bar, XAxis, YAxis, Legend } from 'recharts';
import useBacklog from '../../../hooks/useBacklog';
import useSprints from '../../../hooks/useSprints';
import usePageWidth from '../../../hooks/usePageWidth';
import { Backlogs, Sprints, Backlog, Sprint } from '../../../types/index';
import { BarChart } from './BarChart.styles';
import { Props } from './BarChart.types';

const BarDataChart: React.FC<Props> = ({ barType }) => {
  const pageWidth = usePageWidth();
  const backlog = useBacklog();
  const sprints = useSprints();

  const filterCollection = (type: string, collection: Backlogs | Sprints) => {
    if (backlog && sprints && collection) {
      return collection.filter((doc: Backlog | Sprint) => doc.type === type).length;
    }
    return null;
  };

  const cardWidth = () => (pageWidth <= 450 ? 300 : 400);
  const cardHeight = () => (pageWidth <= 450 ? 300 : 300);

  const collectionData = (collection: Backlogs | Sprints) => [
    {
      name: 'To do',
      backlog: filterCollection('To do', collection),
      sprint: filterCollection('To do', collection),
    },
    {
      name: 'In progress',
      backlog: filterCollection('In progress', collection),
      sprint: filterCollection('In progress', collection),
    },
    {
      name: 'Finished',
      backlog: filterCollection('Finished', collection),
      sprint: filterCollection('Finished', collection),
    },
  ];

  return (
    <>
      <BarChart width={cardWidth()} height={cardHeight()} data={barType === 'backlog' ? collectionData(backlog) : collectionData(sprints)}>
        <XAxis dataKey="name" />
        <YAxis />
        <Legend />
        <Bar
          dataKey={barType === 'backlog' ? 'backlog' : 'sprint'}
          fill={barType === 'backlog' ? '#1FC844' : '#ea4c89'}
          background={{ fill: '#eee' }}
        />
      </BarChart>
    </>
  );
};

export default BarDataChart;
