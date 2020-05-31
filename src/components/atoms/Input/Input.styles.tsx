import styled, { css } from 'styled-components';
import { media } from '../../../utils/media';

const Input = styled.input<{ signup?: boolean; newProject?: boolean; select?: boolean }>`
  border: none;
  background-color: ${({ theme }) => theme.inputBackgournd};
  width: 100%;
  max-width: 40rem;
  height: 4rem;
  border-radius: 8px;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textPrimary};
  font-weight: 500;
  padding: 0 1.2rem;
  ::-webkit-file-upload-button {
    display: none;
  }
  :read-only {
    cursor: not-allowed;
  }
  [type='file'] {
    cursor: pointer;
  }
  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: textfield;
    margin: 0;
  }

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

  ${({ newProject }) =>
    newProject &&
    css`
      :focus,
      :hover {
        background-color: #fff;
        box-shadow: ${({ theme }) => theme.pinkSecondary} 0 0 0 4px;
      }
      :focus {
        border: 1px solid ${({ theme }) => theme.pinkPrimary};
      }
    `};
`;

export default Input;
