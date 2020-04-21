import React from 'react';
import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';
import useBacklog from '../../hooks/useBacklog';
import useSprints from '../../hooks/useSprints';
import usePageWidth from '../../hooks/usePageWidth';

const StyledBarChart = styled(BarChart)`
  background-color: #fff;
  padding: 3rem 4rem;
  border-radius: 7px;
  box-shadow: 3px 6px 10px ${({ theme }) => theme.cardShadow};
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 450px) {
    padding: 3rem 6rem;
  }
`;

interface Props {
  barType: string;
}

interface Backlog {
  type?: string;
}
interface Sprint {
  type?: string;
}

const BarDataChart: React.FC<Props> = ({ barType }) => {
  const pageWidth = usePageWidth();
  const backlog = useBacklog();
  const sprints = useSprints();

  const filterCollection = (type: string, collection: any) => {
    if (backlog && sprints) {
      return collection.filter((doc: Backlog | Sprint) => doc.type === type).length;
    }
    return null;
  };

  const cardWidth = () => (pageWidth <= 450 ? 300 : 400);
  const cardHeight = () => (pageWidth <= 450 ? 300 : 300);

  const collectionData = (collection: any) => [
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
      <StyledBarChart
        width={cardWidth()}
        height={cardHeight()}
        data={barType === 'backlog' ? collectionData(backlog) : collectionData(sprints)}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Legend />
        <Bar
          dataKey={barType === 'backlog' ? 'backlog' : 'sprint'}
          fill={barType === 'backlog' ? '#1FC844' : '#ea4c89'}
          background={{ fill: '#eee' }}
        />
      </StyledBarChart>
    </>
  );
};

export default BarDataChart;
