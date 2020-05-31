import { SyntheticEvent } from 'react';

export interface Props {
  type: string;
  handlePick: (e: SyntheticEvent<HTMLDivElement>) => void;
}
