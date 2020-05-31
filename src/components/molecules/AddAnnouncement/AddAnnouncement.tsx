import React from 'react';
import { Formik } from 'formik';
import { firestore } from '../../../firebase/index';
import Input from '../../atoms/Input/Input.styles';
import Label from '../../atoms/Label/Label.styles';
import Select from '../../atoms/Select/Select.styles';
import Option from '../../atoms/Option/Option.styles';
import useUser from '../../../hooks/useUser';
import ModalTemplate from '../../../templates/ModalTemplate/ModalTemplate';
import LabelInputWrapper from '../../atoms/LabelInputWrapper/LabelInputWrapper.styles';
import Button from '../../atoms/Button/Button.styles';
import { types } from '../../../state/enums';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage.styles';
import { Form, ButtonWrapper } from './AddAnnouncement.styles';
import { Props } from './AddAnnouncement.types';

const AddAnnouncement: React.FC<Props> = ({ toggleVisibility, isVisible }) => {
  const currentUser = useUser();
  const { PROJECT_ID } = types;

  const handleCreate = (content: string, selected: string) => {
    if (currentUser !== null) {
      const projectID = localStorage.getItem(PROJECT_ID);
      const AnnouncementsRef = firestore.collection(`projects/${projectID}/announcements`);
      const { uid, photoURL, email, name } = currentUser;

      const announcement = {
        content,
        type: selected,
        user: {
          uid,
          photoURL,
          email,
          name,
        },
      };
      AnnouncementsRef.add({ ...announcement });
      toggleVisibility();
    }
  };

  return (
    <ModalTemplate isVisible={isVisible} toggleVisibility={toggleVisibility} title="Add Announcement">
      <Formik
        initialValues={{ content: '', selected: 'Information' }}
        validate={({ content }) => {
          const errors: Partial<{ content: string }> = {};
          if (!content) {
            errors.content = 'Content is required';
          }
          return errors;
        }}
        onSubmit={({ content, selected }) => handleCreate(content, selected)}
      >
        {({ values: { content, selected }, handleChange, handleBlur, handleSubmit, errors }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <LabelInputWrapper>
                <Label htmlFor="select">Type</Label>
                <Select
                  id="selected"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="selected"
                  value={selected}
                  aria-label="selected"
                  aria-required="true"
                  aria-invalid="true"
                  autoComplete="new-password"
                >
                  <Option>Information</Option>
                  <Option>Meeting</Option>
                  <Option>Deadline</Option>
                  <Option>Other</Option>
                </Select>
              </LabelInputWrapper>
              <LabelInputWrapper>
                <Label htmlFor="content">Content</Label>
                <Input
                  id="content"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="content"
                  value={content}
                  aria-label="content"
                  aria-required="true"
                  aria-invalid={errors.content ? 'true' : 'false'}
                  autoComplete="new-password"
                />
                {errors.content && <ErrorMessage>{errors.content}</ErrorMessage>}
              </LabelInputWrapper>
              <ButtonWrapper>
                <Button type="submit" color="yellow">
                  Add
                </Button>
              </ButtonWrapper>
            </Form>
          );
        }}
      </Formik>
    </ModalTemplate>
  );
};

export default AddAnnouncement;
