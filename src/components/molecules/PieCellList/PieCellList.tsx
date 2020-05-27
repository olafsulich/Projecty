import React from 'react';
import { Cell } from 'recharts';

interface TeamMember {
  name: string;
  value: number | null;
}

interface Props {
  teamData: TeamMember[];
}

const PieCellList: React.FC<Props> = ({ teamData }) => {
  return (
    <>
      {teamData.map(entry => (
        <Cell key={`cell-${entry}`} />
      ))}
    </>
  );
};

export default PieCellList;
