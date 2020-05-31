import React from 'react';
import { ReactComponent as ProjectManagerSVG } from '../../../assets/board.svg';
import { ReactComponent as DeveloperSVG } from '../../../assets/rocket.svg';
import { ReactComponent as DesignerSVG } from '../../../assets/paint.svg';
import { ReactComponent as QASVG } from '../../../assets/checked.svg';
import { Wrapper, CircularIcon, Heading, Text } from './TypeCard.styles';
import { Props } from './TypeCard.types';

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
