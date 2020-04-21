import styled, { css } from 'styled-components';

const StyledInput = styled.input<{ signup?: boolean; newProject?: boolean; select?: boolean }>`
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

  [type='file'] {
    cursor: pointer;
  }

  :focus,
  :hover {
    background-color: #fff;
    box-shadow: ${({ signup }) => (signup ? '#EAFCEE' : '#fff5da')} 0 0 0 4px;
  }
  :focus {
    border: 1px solid ${({ signup }) => (signup ? '#1FC844' : '#F7B801')};
  }

  ::placeholder {
    color: ${({ theme }) => theme.textSecondary};
  }

  @media only screen and (min-width: 1150px) {
    font-size: 1.4rem;
    height: 4.2rem;
  }
  @media only screen and (min-width: 1200px) {
    max-width: 50rem;
  }
  @media only screen and (min-width: 1400px) {
    height: 4.6rem;
  }

  @media only screen and (min-width: 1600px) {
    height: 4.8rem;
  }

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

export default StyledInput;
