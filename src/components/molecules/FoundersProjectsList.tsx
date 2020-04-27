import React from 'react';
import styled from 'styled-components';
import Card from '../atoms/Card';
import { auth } from '../../firebase';
import { Projects, Project } from '../../types/index';

const StyledList = styled.ul`
  width: 100%;
  max-height: 35%;
  overflow: scroll;
  padding-top: 5rem;
`;

const StyledCardWrapper = styled.li`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

interface Props {
  projects: Projects;
  handlePick: (key: string) => void;
}

const FoundersProjectsList: React.FC<Props> = ({ projects, handlePick }) => {
  const filterDocument = (doc: Project) => (auth.currentUser ? doc.user.uid === auth.currentUser.uid : null);

  return (
    <>
      {projects ? (
        <StyledList>
          {projects.filter(filterDocument).map(({ projectName, key }: Project) => (
            <StyledCardWrapper onClick={() => handlePick(key)}>
              <Card heading={projectName} type="project" />
            </StyledCardWrapper>
          ))}
        </StyledList>
      ) : null}
    </>
  );
};

export default FoundersProjectsList;
