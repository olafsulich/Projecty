import styled from 'styled-components';

const StyledButton = styled.button<{ color: string }>`
  width: 100%;
  height: 4rem;
  font-size: 1.4rem;
  font-weight: 700;
  background-color: ${({ color }) => {
    switch (color) {
      case 'yellow':
        return '#f7b801';
      case 'green':
        return '#1FC844';
      case 'pink':
        return '#ea4c89';
      default:
        return '#f7b801';
    }
  }};
  color: #fff;
  border-radius: 8px;
  max-width: 40rem;
  margin-bottom: 2rem;

  :focus {
    background-color: ${({ color }) => {
      switch (color) {
        case 'yellow':
          return '#fff5da';
        case 'green':
          return '#EAFCEE';
        case 'pink':
          return '#f082ac';
        default:
          return '#fff5da';
      }
    }};
    color: ${({ color }) => {
      switch (color) {
        case 'yellow':
          return '#f7b801';
        case 'green':
          return '#1FC844';
        case 'pink':
          return '#ea4c89';
        default:
          return '#f7b801';
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
