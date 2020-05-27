import styled from 'styled-components';
import { PieChart as Pie } from 'recharts';

const TeamWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

const PieChart = styled(Pie)`
  background-color: #fff;
  padding: 2rem 3rem;
  border-radius: 7px;
  box-shadow: 3px 6px 10px ${({ theme }) => theme.cardShadow};
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  width: 40rem;
  height: 30rem;
`;

const Heading = styled.p`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.textSecondary};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`;

export { TeamWrapper, PieChart, Heading };
