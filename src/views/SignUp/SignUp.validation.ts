import * as yup from 'yup';
import { emailRequired, passwordRequired, invalidEmail, invalidPassword, nameRequired } from '../../helpers/errorMessages';
import { passwordSchema } from '../../helpers/validation';

export const SignUpSchema = yup.object().shape({
  name: yup.string().required(nameRequired),
  password: yup
    .string()
    .matches(passwordSchema, invalidPassword)
    .required(passwordRequired),
  email: yup
    .string()
    .email(invalidEmail)
    .required(emailRequired),
});
