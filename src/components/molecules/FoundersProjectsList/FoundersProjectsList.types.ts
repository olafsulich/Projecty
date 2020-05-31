import { Projects } from '../../../types/index';

export interface Props {
  projects: Projects;
  handlePick: (key: string) => void;
}
