import * as yup from 'yup';
import { contentRequired, sprintDuration } from '../../../helpers/errorMessages';

export const AddSprintSchema = yup.object().shape({
  content: yup.string().required(contentRequired),
  days: yup.string().required(sprintDuration),
});
