import styled from 'styled-components';

const List = styled.ul`
  width: 100%;
  max-height: 35%;
  overflow: scroll;
  overflow-x: hidden;
  padding-top: 5rem;
`;

const CardWrapper = styled.li`
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  :focus {
    div {
      border: 2px solid ${({ theme }) => theme.typeCardSecondary};
    }
  }
`;

export { List, CardWrapper };
