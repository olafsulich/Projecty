import styled from 'styled-components';
import { BarChart as Chart } from 'recharts';

const BarChart = styled(Chart)`
  background-color: #fff;
  padding: 3rem 4rem;
  border-radius: 7px;
  box-shadow: 3px 6px 10px ${({ theme }) => theme.cardShadow};
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 450px) {
    padding: 3rem 6rem;
  }
`;

export { BarChart };
