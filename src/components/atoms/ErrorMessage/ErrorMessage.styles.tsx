import styled from 'styled-components';

const ErrorMessage = styled.span`
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.bold};
  margin-top: 1rem;
  color: ${({ theme }) => theme.redPrimary};
`;

export default ErrorMessage;
