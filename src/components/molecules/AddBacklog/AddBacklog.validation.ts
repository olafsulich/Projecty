import * as yup from 'yup';
import { contentRequired } from '../../../helpers/errorMessages';

export const AddBacklogSchema = yup.object().shape({
  content: yup.string().required(contentRequired),
});
