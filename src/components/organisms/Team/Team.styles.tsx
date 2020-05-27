import styled from 'styled-components';
import { Link } from '@reach/router';

const TeamLink = styled(Link)`
  :focus {
    div {
      border: 2px solid ${({ theme }) => theme.typeCardSecondary};
    }
  }
`;

export { TeamLink };
