import styled from 'styled-components';
import { Link } from '@reach/router';

const MenuIcon = styled.div`
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

const MenuText = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.svgIconActive};
  @media only screen and (min-width: 500px) {
    font-size: 1.4rem;
  }

  @media only screen and (min-width: 950px) {
    font-size: 1.5rem;
  }
`;

const Wrapper = styled.li<{ about?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: ${({ about }) => (about ? '1rem' : '0')};
  margin-bottom: 1.5rem;
`;

const MenuItem = styled(Link)`
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
    & > ${MenuIcon} > path,
    & > ${MenuIcon} > g > path {
      fill: ${({ theme }) => theme.menuItemActive};
    }

    & > ${MenuText} {
      color: ${({ theme }) => theme.menuItemActive};
    }
  }
`;

export { MenuIcon, MenuText, Wrapper, MenuItem };
