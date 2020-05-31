import styled, { css } from 'styled-components';
import { media } from '../../../utils/media';

const Select = styled.select<{ signup?: boolean; details?: boolean }>`
  background-color: ${({ theme }) => theme.inputBackgournd};
  border: none;
  width: 100%;
  max-width: 40rem;
  height: 4rem;
  padding: 0 1.2rem;
  position: relative;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  text-indent: 0%;
  text-overflow: '';
  color: ${({ theme }) => theme.textPrimary};
  font-weight: 500;
  font-size: 1.3rem;

  :focus,
  :hover {
    background-color: #fff;
    box-shadow: ${({ signup, theme }) => (signup ? theme.greenSecondary : theme.yellowSecondary)} 0 0 0 4px;
  }
  :focus {
    border: 1px solid ${({ signup, theme }) => (signup ? theme.greenPrimary : theme.yellowPrimary)};
  }
  ::placeholder {
    color: ${({ theme }) => theme.textSecondary};
  }

  ${media.md`
    font-size: 1.4rem;
    height: 4.2rem;
    max-width: 50rem;
  `}

  ${media.xl`
    height: 4.6rem;
  `}

  ${media.xxl`
    height: 4.8rem;
  `}

  ${({ details }) =>
    details &&
    css`
      max-width: 12rem;
      @media only screen and (min-width: 1200px) {
        max-width: 14rem;
      }
    `};
`;

export default Select;
