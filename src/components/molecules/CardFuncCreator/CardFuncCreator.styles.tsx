import styled from 'styled-components';
import { Link as RouterLink } from '@reach/router';

const Link = styled(RouterLink)`
  :focus {
    div {
      border: 2px solid ${({ theme }) => theme.typeCardSecondary};
    }
  }
`;

export { Link };
