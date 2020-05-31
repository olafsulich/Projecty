import * as yup from 'yup';
import { nameRequired } from '../../helpers/errorMessages';

export const NewProjectSchema = yup.object().shape({
  password: yup.string().required(nameRequired),
});
