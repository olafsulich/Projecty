import styled from 'styled-components';
import { media } from '../../../utils/media';

const LabelInputWrapper = styled.fieldset`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 5rem;
  border: none;

  ${media.sm`
    align-items: center;  
  `}
`;

export default LabelInputWrapper;
