import React from 'react';
import MenuItemsList from '../MenuItemsList/MenuItemsList';
import Logo from '../../atoms/Logo/Logo.styles';
import usePageWidth from '../../../hooks/usePageWidth';
import { Wrapper, ButtonWrapper, Button, List, LogoWrapper } from './Menu.styles';
import { Props } from './Menu.types';

const Menu: React.FC<Props> = ({ isVisible, handleChange }) => {
  const pageWidth = usePageWidth();
  return (
    <>
      {pageWidth > 950 ? (
        <Wrapper isVisible>
          <LogoWrapper>
            <Logo signUp>Projecty</Logo>
          </LogoWrapper>
          <List>
            <MenuItemsList main />
          </List>
          <List secondary>
            <MenuItemsList />
          </List>
        </Wrapper>
      ) : (
        <Wrapper isVisible={isVisible}>
          <ButtonWrapper>
            <Button name="close menu" onClick={handleChange} />
          </ButtonWrapper>
          <List>
            <MenuItemsList main />
          </List>
          <List secondary>
            <MenuItemsList />
          </List>
        </Wrapper>
      )}
    </>
  );
};

export default Menu;
