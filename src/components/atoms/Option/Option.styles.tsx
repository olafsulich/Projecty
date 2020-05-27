import styled from 'styled-components';

const Option = styled.option`
  width: 100%;
  font-size: 1.1rem;
  text-transform: capitalize;
  &:hover,
  &:active,
  &:focus,
  &:checked {
    background: ${({ theme }) => theme.textPrimary};
    color: #fff;
  }
`;
export default Option;
