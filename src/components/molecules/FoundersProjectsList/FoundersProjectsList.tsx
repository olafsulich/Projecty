import React from 'react';
import Card from '../../atoms/Card/Card';
import { auth } from '../../../firebase';
import { Project } from '../../../types/index';
import { List, CardWrapper } from './FoundersProjectsList.styles';
import { Props } from './FoundersProjectsList.types';

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
