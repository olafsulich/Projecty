import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import { ReactComponent as SettingSVG } from '../../assets/settings.svg';
import { types } from '../../state/enums';
import { menuItemsData } from '../../data/menuItemsData';

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
  const { PROJECT_KEY } = types;
  const projectKey = localStorage.getItem(PROJECT_KEY);
  const projectPath = `/project/${projectKey}`;
  return (
    <>
      {main ? (
        <>
          {menuItemsData.map(({ icon, path, name }) => (
            <StyledWrapper key={name}>
              <StyledMenuItem to={`${projectPath}/${path}`}>
                <StyledMenuIcon as={icon} />
                <StyledMenuText>{name}</StyledMenuText>
              </StyledMenuItem>
            </StyledWrapper>
          ))}
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
