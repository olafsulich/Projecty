import React from 'react';
import styled from 'styled-components';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import usePageWidth from '../../hooks/usePageWidth';
import useTeam from '../../hooks/useTeam';
import { Member } from '../../types/index';

const StyledTeamWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

const StyledPie = styled(PieChart)`
  background-color: #fff;
  padding: 2rem 3rem;
  border-radius: 7px;
  box-shadow: 3px 6px 10px ${({ theme }) => theme.cardShadow};
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  width: 40rem;
  height: 30rem;
`;

const StyledHeading = styled.p`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.textSecondary};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`;

const TeamChart: React.FC = () => {
  const pageWidth = usePageWidth();
  const team = useTeam();

  const filterRole = (role: string) => {
    if (team) {
      return team.filter((doc: Member) => doc.user.type === role).length;
    }
    return null;
  };

  const cardWidth = () => (pageWidth <= 450 ? 300 : 400);
  const cardHeight = () => (pageWidth <= 450 ? 300 : 300);

  const teamData = [
    { name: 'Developers', value: filterRole('developer') },
    { name: 'Project Managers', value: filterRole('project-manager') },
    { name: 'Designers', value: filterRole('designer') },
    { name: 'QA', value: filterRole('quality-assurance') },
  ];

  const COLORS = ['#1FC844', '#F7B801', '#ea4c89', '#2E5BFF'];

  return (
    <StyledTeamWrapper>
      {!teamData.length ? (
        <StyledHeading>Add members</StyledHeading>
      ) : (
        <>
          <StyledHeading>Team</StyledHeading>
          <StyledPie width={cardWidth()} height={cardHeight()}>
            <Pie data={teamData} innerRadius={80} outerRadius={110} dataKey="value" label>
              {teamData.map((entry, index) => (
                <>
                  <Cell fill={COLORS[index % COLORS.length]} />
                  <p>{entry}</p>
                </>
              ))}
              <Legend />
            </Pie>
            <Tooltip />
          </StyledPie>
        </>
      )}
    </StyledTeamWrapper>
  );
};

export default TeamChart;
