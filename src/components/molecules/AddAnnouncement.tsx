import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import { firestore } from '../../firebase/index';
import StyledInput from '../atoms/Input';
import StyledLabel from '../atoms/Label';
import StyledSelect from '../atoms/Select';
import StyledOption from '../atoms/Option';
import useUser from '../../hooks/useUser';
import ModalTemplate from '../../templates/ModalTemplate';
import StyledLabelInputWrapper from '../atoms/LabelInputWrapper';
import StyledButton from '../atoms/Button';
import { types } from '../../state/enums';

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  margin-top: 6rem;
`;

const StyledButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

interface Props {
  toggleVisibility: () => void;
  isVisible: boolean;
}

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
        onSubmit={({ content, selected }) => handleCreate(content, selected)}
      >
        {({ values: { content, selected }, handleChange, handleBlur, handleSubmit }) => {
          return (
            <StyledForm onSubmit={handleSubmit}>
              <StyledLabelInputWrapper>
                <StyledLabel htmlFor="select">Type</StyledLabel>
                <StyledSelect
                  id="selected"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="selected"
                  value={selected}
                  aria-label="selected"
                  aria-required="true"
                  autoComplete="new-password"
                >
                  <StyledOption>Information</StyledOption>
                  <StyledOption>Meeting</StyledOption>
                  <StyledOption>Deadline</StyledOption>
                  <StyledOption>Other</StyledOption>
                </StyledSelect>
              </StyledLabelInputWrapper>
              <StyledLabelInputWrapper>
                <StyledLabel htmlFor="content">Content</StyledLabel>
                <StyledInput
                  id="content"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="content"
                  value={content}
                  aria-label="content"
                  aria-required="true"
                  autoComplete="new-password"
                />
              </StyledLabelInputWrapper>
              <StyledButtonWrapper>
                <StyledButton type="submit" color="yellow">
                  Add
                </StyledButton>
              </StyledButtonWrapper>
            </StyledForm>
          );
        }}
      </Formik>
    </ModalTemplate>
  );
};

export default AddAnnouncement;
