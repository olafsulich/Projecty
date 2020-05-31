import styled from 'styled-components';
import { media } from '../../../utils/media';

const Button = styled.button<{ color: string }>`
  width: 100%;
  height: 4rem;
  font-size: 1.4rem;
  font-weight: 700;
  background-color: ${({ color, theme }) => {
    switch (color) {
      case 'yellow':
        return theme.yellowPrimary;
      case 'green':
        return theme.greenPrimary;
      case 'pink':
        return theme.pinkPrimary;
      case 'red':
        return theme.redPrimary;
      default:
        return theme.yellowPrimary;
    }
  }};
  color: #fff;
  border-radius: 8px;
  max-width: 40rem;
  margin-bottom: 2rem;

  :focus {
    background-color: ${({ color, theme }) => {
      switch (color) {
        case 'yellow':
          return theme.yellowSecondary;
        case 'green':
          return theme.greenSecondary;
        case 'pink':
          return theme.pinkSecondary;
        case 'red':
          return theme.typeCardSecondary;
        default:
          return theme.yellowSecondary;
      }
    }};
    color: ${({ color, theme }) => {
      switch (color) {
        case 'yellow':
          return theme.yellowPrimary;
        case 'green':
          return theme.greenPrimary;
        case 'pink':
          return theme.pinkPrimary;
        case 'red':
          return theme.redPrimary;
        default:
          return theme.yellowPrimary;
      }
    }};
  }

  ${media.sm`
    width: 35%;
  `}

  ${media.md`
    font-size: 1.5rem;
    width: 45%;
  `}

  ${media.xl`
    width: 55%;
  `}
`;

export default Button;
