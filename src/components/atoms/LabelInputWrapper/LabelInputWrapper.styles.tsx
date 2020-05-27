import styled from 'styled-components';

const LabelInputWrapper = styled.fieldset`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 5rem;
  border: none;

  @media only screen and (min-width: 950px) {
    align-items: center;
  }
`;

export default LabelInputWrapper;
