import React from 'react';
import Card from '../../atoms/Card/Card';
import { auth } from '../../../firebase';
import { Projects, Project } from '../../../types/index';
import { List, CardWrapper } from './FoundersProjectsList.styles';

interface Props {
  projects: Projects;
  handlePick: (key: string) => void;
}

const FoundersProjectsList: React.FC<Props> = ({ projects, handlePick }) => {
  const filterDocument = (doc: Project) => (auth.currentUser ? doc.user.uid === auth.currentUser.uid : null);

  return (
    <>
      {projects ? (
        <List>
          {projects.filter(filterDocument).map(({ projectName, key }: Project) => (
            <CardWrapper key={key} tabIndex={0} onClick={() => handlePick(key)}>
              <Card heading={projectName} type="project" />
            </CardWrapper>
          ))}
        </List>
      ) : null}
    </>
  );
};

export default FoundersProjectsList;
