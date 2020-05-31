import * as yup from 'yup';
import { emailRequired, passwordRequired, invalidEmail, invalidPassword } from '../../helpers/errorMessages';
import { passwordSchema } from '../../helpers/validation';

export const SignInSchema = yup.object().shape({
  password: yup
    .string()
    .matches(passwordSchema, invalidPassword)
    .required(passwordRequired),
  email: yup
    .string()
    .email(invalidEmail)
    .required(emailRequired),
});
