import styled from 'styled-components';

const Wrapper = styled.div`
  width: 15rem;
  height: 18rem;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.typeCardPrimary};
  background-color: ${({ theme }) => theme.typeCardPrimary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 2rem 1rem;
  cursor: pointer;

  :focus,
  :hover {
    border: 2px solid ${({ theme }) => theme.typeCardSecondary};
  }
`;

const CircularIcon = styled.div<{ type: string }>`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  pointer-events: none;
  background-color: ${({ type, theme }) => {
    switch (type) {
      case 'project-manager':
        return theme.yellowSecondary;
      case 'developer':
        return theme.greenSecondary;
      case 'designer':
        return 'hsla(337, 79%, 73%,0.35)';
      case 'quality-assurance':
        return theme.typeCardSecondary;
      default:
        return theme.yellowSecondary;
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h3`
  font-size: 1.3rem;
  font-weight: 400;
  pointer-events: none;
`;

const Text = styled.p`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.textSecondary};
  font-weight: 400;
  pointer-events: none;
  text-align: center;
`;

export { Wrapper, CircularIcon, Heading, Text };
