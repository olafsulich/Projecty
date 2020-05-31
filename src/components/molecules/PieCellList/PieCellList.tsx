import React from 'react';
import { Cell } from 'recharts';
import { Props } from './PieCellList.types';

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
