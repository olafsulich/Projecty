import styled from 'styled-components';
import { media } from '../../../utils/media';

const Label = styled.label`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.textPrimary};
  font-weight: 700;
  margin-bottom: 1rem;

  ${media.md`
    font-size: 1.5rem;
  `}
`;

export default Label;
