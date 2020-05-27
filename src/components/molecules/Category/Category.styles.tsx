import styled from 'styled-components';

const CategoryWrapper = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 4rem;
`;

const CategoryHeading = styled.h2<{ type: string }>`
  font-weight: 500;
  color: #0d0c22;
  margin-bottom: 8rem;
  font-size: 1.8rem;
  position: relative;
  transform: translateX(2rem);

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: -2rem;
    width: 5px;
    height: 110%;
    background-color: ${({ theme }) => theme.yellowPrimary};
    background-color: ${({ type, theme }) => {
      switch (type) {
        case 'yellow':
          return theme.yellowPrimary;
        case 'green':
          return theme.greenPrimary;
        case 'blue':
          return theme.bluePrimary;
        case 'red':
          return theme.pinkPrimary;
        default:
          return theme.yellowPrimary;
      }
    }};
    border-radius: 7px;
  }
`;

export { CategoryWrapper, CategoryHeading };
