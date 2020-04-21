import React from 'react';
import styled from 'styled-components';
import Card from '../atoms/Card';
import { auth } from '../../firebase';

const StyledList = styled.div`
  width: 100%;
  max-height: 35%;
  overflow: scroll;
  padding-top: 5rem;
`;

const StyledCardWrapper = styled.div`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

interface Project {
  projectName: string;
  key: string;
}

interface Props {
  projects: Project[];
  handlePick: (key: string) => void;
}

const FoundersProjectsList: React.FC<Props> = ({ projects, handlePick }) => {
  const filterDocument = (doc: any) => (auth.currentUser ? doc.user.uid === auth.currentUser.uid : null);

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
