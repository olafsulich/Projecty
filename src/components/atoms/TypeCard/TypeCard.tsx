import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ProjectManagerSVG } from '../../../assets/board.svg';
import { ReactComponent as DeveloperSVG } from '../../../assets/rocket.svg';
import { ReactComponent as DesignerSVG } from '../../../assets/paint.svg';
import { ReactComponent as QASVG } from '../../../assets/checked.svg';

const Wrapper = styled.div`
  width: 15rem;
  height: 18rem;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.typeCardPrimary};
  background-color: ${({ theme }) => theme.typeCardPrimary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 2rem 1rem;
  cursor: pointer;

  :focus,
  :hover {
    border: 2px solid ${({ theme }) => theme.typeCardSecondary};
  }
`;

const CircularIcon = styled.div<{ type: string }>`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  pointer-events: none;
  background-color: ${({ type, theme }) => {
    switch (type) {
      case 'project-manager':
        return theme.yellowSecondary;
      case 'developer':
        return theme.greenSecondary;
      case 'designer':
        return 'hsla(337, 79%, 73%,0.35)';
      case 'quality-assurance':
        return theme.typeCardSecondary;
      default:
        return theme.yellowSecondary;
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h3`
  font-size: 1.3rem;
  font-weight: 400;
  pointer-events: none;
`;

const Text = styled.p`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.textSecondary};
  font-weight: 400;
  pointer-events: none;
  text-align: center;
`;

interface Props {
  type: string;
  handlePick: (e: React.SyntheticEvent<HTMLDivElement>) => void;
}

const TypeCard: React.FC<Props> = ({ type, handlePick }) => {
  const switchTypeCard = (cardType: string) => {
    switch (cardType) {
      case 'project-manager':
        return (
          <>
            <CircularIcon type="project-menager">
              <ProjectManagerSVG />
            </CircularIcon>
            <Heading>Project Manager</Heading>
            <Text>Look after the project</Text>
          </>
        );
      case 'developer':
        return (
          <>
            <CircularIcon type="developer">
              <DeveloperSVG />
            </CircularIcon>
            <Heading>Developer</Heading>
            <Text>Build creative projects</Text>
          </>
        );
      case 'designer':
        return (
          <>
            <CircularIcon type="designer">
              <DesignerSVG />
            </CircularIcon>
            <Heading>Designer</Heading>
            <Text>Create amazing experience</Text>
          </>
        );
      case 'quality-assurance':
        return (
          <>
            <CircularIcon type="quality-assurance">
              <QASVG />
            </CircularIcon>
            <Heading>Quality Assurance</Heading>
            <Text>Deliver quality solutions</Text>
          </>
        );
      default:
        return (
          <>
            <CircularIcon type="project-manager">
              <ProjectManagerSVG />
            </CircularIcon>
            <Heading>Project Manager</Heading>
            <Text>Manage your project</Text>
          </>
        );
    }
  };
  return (
    <Wrapper tabIndex={0} data-type={type} onClick={handlePick}>
      {switchTypeCard(type)}
    </Wrapper>
  );
};

export default TypeCard;
