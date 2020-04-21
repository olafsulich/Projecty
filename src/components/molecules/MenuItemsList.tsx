import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import { ReactComponent as TeamSVG } from '../../assets/menu/Team.svg';
import { ReactComponent as AnnoucementsSVG } from '../../assets/menu/Announcements.svg';
import { ReactComponent as StatisticsSVG } from '../../assets/menu/Statistics.svg';
import { ReactComponent as BacklogSVG } from '../../assets/menu/Backlog.svg';
import { ReactComponent as SprintsSVG } from '../../assets/menu/Sprints.svg';
import { ReactComponent as SettingSVG } from '../../assets/settings.svg';

const StyledMenuIcon = styled.div`
  width: 2rem;
  height: 2rem;
  margin-right: 2rem;

  path,
  g > path {
    fill: ${({ theme }) => theme.svgIconActive};
  }

  @media only screen and (min-width: 500px) {
    width: 2.6rem;
    height: 2.6rem;
  }
`;

const StyledMenuText = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.svgIconActive};
  @media only screen and (min-width: 500px) {
    font-size: 1.4rem;
  }

  @media only screen and (min-width: 950px) {
    font-size: 1.5rem;
  }
`;

const StyledWrapper = styled.li<{ about?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: ${({ about }) => (about ? '1rem' : '0')};
  margin-bottom: 1.5rem;
`;

const StyledMenuItem = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1.2rem 2rem;
  border-radius: 10px;
  color: inherit;

  &.active {
    background-color: ${({ theme }) => theme.menuItem};
  }

  &.active,
  :focus,
  :hover {
    & > ${StyledMenuIcon} > path,
    & > ${StyledMenuIcon} > g > path {
      fill: ${({ theme }) => theme.menuItemActive};
    }

    & > ${StyledMenuText} {
      color: ${({ theme }) => theme.menuItemActive};
    }
  }
`;

interface Props {
  main?: boolean;
}

const MenuItemsList: React.FC<Props> = ({ main }) => {
  const projectKey = localStorage.getItem('PROJECT_KEY');
  const projectPath = `/project/${projectKey}`;
  return (
    <>
      {main ? (
        <>
          <StyledWrapper>
            <StyledMenuItem to={`${projectPath}/team`}>
              <StyledMenuIcon as={TeamSVG} />
              <StyledMenuText>Team</StyledMenuText>
            </StyledMenuItem>
          </StyledWrapper>
          <StyledWrapper>
            <StyledMenuItem to={`${projectPath}/announcements`}>
              <StyledMenuIcon as={AnnoucementsSVG} />
              <StyledMenuText>Annoucements</StyledMenuText>
            </StyledMenuItem>
          </StyledWrapper>
          <StyledWrapper>
            <StyledMenuItem to={`${projectPath}/statistics`}>
              <StyledMenuIcon as={StatisticsSVG} />
              <StyledMenuText>Statistics</StyledMenuText>
            </StyledMenuItem>
          </StyledWrapper>
          <StyledWrapper>
            <StyledMenuItem to={`${projectPath}/backlog`}>
              <StyledMenuIcon as={BacklogSVG} />
              <StyledMenuText>Backlog</StyledMenuText>
            </StyledMenuItem>
          </StyledWrapper>
          <StyledWrapper>
            <StyledMenuItem to={`${projectPath}/sprints`}>
              <StyledMenuIcon as={SprintsSVG} />
              <StyledMenuText>Sprints</StyledMenuText>
            </StyledMenuItem>
          </StyledWrapper>
        </>
      ) : (
        <StyledWrapper>
          <StyledMenuItem to={`${projectPath}/account`}>
            <StyledMenuIcon as={SettingSVG} />
            <StyledMenuText>Account</StyledMenuText>
          </StyledMenuItem>
        </StyledWrapper>
      )}
    </>
  );
};

export default MenuItemsList;
