import styled from 'styled-components';

const Label = styled.label`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.textPrimary};
  font-weight: 700;
  margin-bottom: 1rem;

  @media only screen and (min-width: 1150px) {
    font-size: 1.5rem;
  }
`;

export default Label;
