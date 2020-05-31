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
import { Form, ButtonWrapper } from './AddSprint.styles';
import { Props } from './AddSprint.types';
import { AddSprintSchema } from './AddSprint.validation';

const AddSprint: React.FC<Props> = ({ toggleVisibility, isVisible }) => {
  const currentUser = useUser();
  const { PROJECT_ID } = types;

  const handleCreate = (content: string, selected: string, days: string) => {
    if (currentUser !== null) {
      const projectID = localStorage.getItem(PROJECT_ID);
      const SprintsRef = firestore.collection(`projects/${projectID}/sprints`);
      const { uid, photoURL, email, name } = currentUser;

      const sprint = {
        content,
        type: selected,
        days,
        user: {
          uid,
          photoURL,
          email,
          name,
        },
      };
      SprintsRef.add({ ...sprint });
      toggleVisibility();
    }
  };

  return (
    <ModalTemplate isVisible={isVisible} toggleVisibility={toggleVisibility} title="Add Sprint" modalTheme="green">
      <Formik
        initialValues={{ content: '', selected: 'To do', days: '' }}
        validationSchema={AddSprintSchema}
        onSubmit={({ content, selected, days }) => handleCreate(content, selected, days)}
      >
        {({ values: { content, selected, days }, handleChange, handleBlur, handleSubmit, errors }) => {
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
                  signup
                >
                  <Option>To do</Option>
                  <Option>In progress</Option>
                  <Option>Finished</Option>
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
                  signup
                />
                {errors.content && <ErrorMessage>{errors.content}</ErrorMessage>}
              </LabelInputWrapper>
              <LabelInputWrapper>
                <Label htmlFor="days">Number of days</Label>
                <Input
                  id="days"
                  type="number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="days"
                  value={days}
                  aria-label="days"
                  aria-required="true"
                  aria-invalid={errors.days ? 'true' : 'false'}
                  autoComplete="new-password"
                  placeholder="10"
                  signup
                />
                {errors.days && <ErrorMessage>{errors.days}</ErrorMessage>}
              </LabelInputWrapper>
              <ButtonWrapper>
                <Button type="submit" color="green">
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

export default AddSprint;
