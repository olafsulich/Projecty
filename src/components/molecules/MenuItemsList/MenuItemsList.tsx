import React from 'react';
import { ReactComponent as SettingSVG } from '../../../assets/settings.svg';
import { types } from '../../../state/enums';
import { menuItemsData } from '../../../data/menuItemsData';
import { MenuIcon, MenuText, Wrapper, MenuItem } from './MenuItemsList.styles';
import { Props } from './MenuItemsList.types';

const MenuItemsList: React.FC<Props> = ({ main }) => {
  const { PROJECT_KEY } = types;
  const projectKey = localStorage.getItem(PROJECT_KEY);
  const projectPath = `/project/${projectKey}`;
  return (
    <>
      {main ? (
        <>
          {menuItemsData.map(({ icon, path, name }) => (
            <Wrapper key={name}>
              <MenuItem to={`${projectPath}/${path}`}>
                <MenuIcon as={icon} />
                <MenuText>{name}</MenuText>
              </MenuItem>
            </Wrapper>
          ))}
        </>
      ) : (
        <Wrapper>
          <MenuItem to={`${projectPath}/account`}>
            <MenuIcon as={SettingSVG} />
            <MenuText>Account</MenuText>
          </MenuItem>
        </Wrapper>
      )}
    </>
  );
};

export default MenuItemsList;
