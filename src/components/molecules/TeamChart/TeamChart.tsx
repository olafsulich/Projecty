import React from 'react';
import { Pie, Tooltip, Legend } from 'recharts';
import usePageWidth from '../../../hooks/usePageWidth';
import useTeam from '../../../hooks/useTeam';
import { Member } from '../../../types/index';
import { TeamWrapper, PieChart, Heading } from './TeamChart.styles';
import PieCellList from '../PieCellList/PieCellList';

const TeamChart: React.FC = () => {
  const pageWidth = usePageWidth();
  const team = useTeam();

  const cardWidth = () => (pageWidth <= 450 ? 300 : 400);
  const cardHeight = () => (pageWidth <= 450 ? 300 : 300);

  const filterRole = (role: string) => {
    if (team) {
      return team.filter((doc: Member) => doc.user.type === role).length;
    }
    return null;
  };
  const teamData = [
    { name: 'Developers', value: filterRole('developer') },
    { name: 'Project Managers', value: filterRole('project-manager') },
    { name: 'Designers', value: filterRole('designer') },
    { name: 'QA', value: filterRole('quality-assurance') },
  ];
  return (
    <TeamWrapper>
      {!teamData.length ? (
        <Heading>Add members</Heading>
      ) : (
        <>
          <Heading>Team</Heading>
          <PieChart width={cardWidth()} height={cardHeight()}>
            <Pie data={teamData} innerRadius={80} outerRadius={110} dataKey="value" label fill="#F7B801">
              <PieCellList teamData={teamData} />
              <Legend />
            </Pie>
            <Tooltip />
          </PieChart>
        </>
      )}
    </TeamWrapper>
  );
};

export default TeamChart;
