import * as yup from 'yup';
import { contentRequired } from '../../../helpers/errorMessages';

export const AddAnnouncementSchema = yup.object().shape({
  content: yup.string().required(contentRequired),
});
