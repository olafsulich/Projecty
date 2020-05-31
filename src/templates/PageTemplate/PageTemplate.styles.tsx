import styled from 'styled-components';
import Heading from '../../components/atoms/Heading/Heading.styles';
import { ReactComponent as Morphing } from '../../assets/morphing.svg';
import { media } from '../../utils/media';
import { Props } from './PageTemplate.types';

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #fbfbfb;
  padding-top: 5rem;
  overflow-x: hidden;

  ${media.sm`
    padding-top: 10rem;
    position: relative;
  `}
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 5%;
`;

const ButtonSecondary = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 8rem;
  background-color: ${({ pageHeading }) => {
    switch (pageHeading) {
      case 'Announcements':
        return '#FFF5DA';
      case 'Team':
        return '#EAFCEE';
      case 'Backlog':
        return '#FFF5DA';
      case 'Sprints':
        return '#EAFCEE';
      case 'Account':
        return '#EAFCEE';
      default:
        return '#f7b801';
    }
  }};
  color: ${({ pageHeading }) => {
    switch (pageHeading) {
      case 'Announcements':
        return '#f7b801';
      case 'Team':
        return '#1FC844';
      case 'Backlog':
        return '#f7b801';
      case 'Sprints':
        return '#1FC844';
      case 'Account':
        return '#1FC844';
      default:
        return '#f7b801';
    }
  }};
  font-size: 1.4rem;
  font-weight: 700;
  border-radius: 10px;
  margin-left: 3rem;

  :focus {
    color: ${({ pageHeading }) => {
      switch (pageHeading) {
        case 'Announcements':
          return '#FFF5DA';
        case 'Team':
          return '#EAFCEE';
        case 'Backlog':
          return '#FFF5DA';
        case 'Sprints':
          return '#EAFCEE';
        case 'Account':
          return '#EAFCEE';
        default:
          return '#f7b801';
      }
    }};
    background-color: ${({ pageHeading }) => {
      switch (pageHeading) {
        case 'Announcements':
          return '#f7b801';
        case 'Team':
          return '#1FC844';
        case 'Backlog':
          return '#f7b801';
        case 'Sprints':
          return '#1FC844';
        case 'Account':
          return '#1FC844';
        default:
          return '#f7b801';
      }
    }};
  }

  ${media.sm`
    margin-bottom: 1rem;
    height: 3.4rem;
    width: 12rem;
    font-size: 1.5rem;
  `}
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fbfbfb;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  ${media.sm`
    flex-direction: row;
  `}
`;

const Morph = styled(Morphing)`
  width: 10rem;
  height: 10rem;
  position: absolute;
  top: 0;
  left: 0;

  ${media.sm`
    display: none;
  `}
`;

const PageHeading = styled(Heading)`
  width: fit-content;
`;

export { Wrapper, Container, PageHeading, Morph, ButtonSecondary, Header };
