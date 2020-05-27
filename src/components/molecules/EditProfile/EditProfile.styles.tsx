import styled from 'styled-components';
import Input from '../../atoms/Input/Input.styles';

const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  margin-top: 6rem;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const InputFile = styled(Input)`
  cursor: pointer;
`;

export { Form, ButtonWrapper, InputFile };
