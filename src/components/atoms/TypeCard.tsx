import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ProjectManagerSVG } from '../../assets/board.svg';
import { ReactComponent as DeveloperSVG } from '../../assets/rocket.svg';
import { ReactComponent as DesignerSVG } from '../../assets/paint.svg';
import { ReactComponent as QASVG } from '../../assets/checked.svg';

const StyledWrapper = styled.div`
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

const StyledCircularIcon = styled.div<{ type: string }>`
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

const StyledHeading = styled.h3`
  font-size: 1.3rem;
  font-weight: 400;
  pointer-events: none;
`;

const StyledText = styled.p`
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
            <StyledCircularIcon type="project-menager">
              <ProjectManagerSVG />
            </StyledCircularIcon>
            <StyledHeading>Project Manager</StyledHeading>
            <StyledText>Look after the project</StyledText>
          </>
        );
      case 'developer':
        return (
          <>
            <StyledCircularIcon type="developer">
              <DeveloperSVG />
            </StyledCircularIcon>
            <StyledHeading>Developer</StyledHeading>
            <StyledText>Build creative projects</StyledText>
          </>
        );
      case 'designer':
        return (
          <>
            <StyledCircularIcon type="designer">
              <DesignerSVG />
            </StyledCircularIcon>
            <StyledHeading>Designer</StyledHeading>
            <StyledText>Create amazing experience</StyledText>
          </>
        );
      case 'quality-assurance':
        return (
          <>
            <StyledCircularIcon type="quality-assurance">
              <QASVG />
            </StyledCircularIcon>
            <StyledHeading>Quality Assurance</StyledHeading>
            <StyledText>Deliver quality solutions</StyledText>
          </>
        );
      default:
        return (
          <>
            <StyledCircularIcon type="project-manager">
              <ProjectManagerSVG />
            </StyledCircularIcon>
            <StyledHeading>Project Manager</StyledHeading>
            <StyledText>Manage your project</StyledText>
          </>
        );
    }
  };
  return (
    <StyledWrapper tabIndex={0} data-type={type} onClick={handlePick}>
      {switchTypeCard(type)}
    </StyledWrapper>
  );
};

export default TypeCard;
