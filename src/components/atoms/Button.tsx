import styled from 'styled-components';

const StyledButton = styled.button<{ color: string }>`
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
        default:
          return theme.yellowPrimary;
      }
    }};
  }

  @media only screen and (min-width: 950px) {
    width: 35%;
  }
  @media only screen and (min-width: 1150px) {
    font-size: 1.5rem;
    width: 45%;
  }
  @media only screen and (min-width: 1400px) {
    width: 55%;
  }
`;

export default StyledButton;
