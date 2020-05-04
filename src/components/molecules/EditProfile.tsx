import React, { useState } from 'react';
import { navigate } from '@reach/router';
import styled from 'styled-components';
import { firestore, storage } from '../../firebase/index';
import StyledInput from '../atoms/Input';
import StyledLabel from '../atoms/Label';
import useUser from '../../hooks/useUser';
import ModalTemplate from '../../templates/ModalTemplate';
import StyledLabelInputWrapper from '../atoms/LabelInputWrapper';
import StyledButton from '../atoms/Button';
import useTeam from '../../hooks/useTeam';
import useBacklog from '../../hooks/useBacklog';
import useSprints from '../../hooks/useSprints';
import useAnnouncements from '../../hooks/useAnnouncements';
import { DocumentFromCollection, Image, Collection, InputEvent } from '../../types/index';
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

const StyledInputFile = styled(StyledInput)`
  cursor: pointer;
`;

interface Props {
  toggleVisibility: () => void;
  isVisible: boolean;
}

const EditProfile: React.FC<Props> = ({ toggleVisibility, isVisible }) => {
  const currentUser = useUser();
  const team = useTeam();
  const backlog = useBacklog();
  const sprints = useSprints();
  const announcements = useAnnouncements();
  const [name, setName] = useState<string>('');
  const [image, setImage] = useState<Image>(null);
  const { PROJECT_ID } = types;
  const projectID = localStorage.getItem(PROJECT_ID);

  const filterCollection = (doc: DocumentFromCollection) => {
    if (currentUser) {
      return doc.user.uid === currentUser.uid;
    }
    return null;
  };

  const updateDocuments = (array: Collection, collection: string, photo?: string) => {
    if (array && team && currentUser) {
      array.forEach((document: DocumentFromCollection) => {
        const filtredMemberId = team.filter(filterCollection);
        const docId = document.id;
        const docRef = firestore.doc(`projects/${projectID}/${collection}/${docId}`);
        const { email, photoURL, uid } = currentUser;
        const userName = currentUser.name;
        const userRole = filtredMemberId[0].user.type;
        if (name) docRef.update({ user: { name, email, photoURL, type: userRole, uid } });
        if (image && photo) docRef.update({ user: { name: userName, email, photoURL: photo, type: userRole, uid } });
      });
    }
  };

  const handleUserNameChange = (e: InputEvent) => setName(e.target.value);

  const handlePhotoChange = (e: InputEvent) => {
    if (e.target.files !== null) {
      const files = e.target.files[0];
      setImage(files);
    }
  };

  const handleUpdate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLFormElement>) => {
    if (currentUser && team && backlog && sprints && announcements) {
      e.preventDefault();
      const userUid = currentUser.uid;
      const docRef = firestore.doc(`users/${userUid}`);
      const filtredMemberId = team.filter(filterCollection);
      const filtredBacklogs = backlog.filter(filterCollection);
      const filtredSprints = sprints.filter(filterCollection);
      const filtredAnnouncements = announcements.filter(filterCollection);

      if (name) {
        docRef.update({ name });
        updateDocuments(filtredMemberId, 'team');
        updateDocuments(filtredBacklogs, 'backlog');
        updateDocuments(filtredSprints, 'sprints');
        updateDocuments(filtredAnnouncements, 'announcements');
      }
      if (image) {
        const uploadTask = storage
          .ref()
          .child(`user-profiles`)
          .child(userUid)
          .put(image);

        uploadTask.on('state_changed', () => {
          storage
            .ref()
            .child(`user-profiles`)
            .child(userUid)
            .getDownloadURL()
            .then((urlPath: string) => {
              docRef.update({ photoURL: urlPath });
              updateDocuments(filtredMemberId, 'team', urlPath);
              updateDocuments(filtredBacklogs, 'backlog', urlPath);
              updateDocuments(filtredSprints, 'sprints', urlPath);
              updateDocuments(filtredAnnouncements, 'announcements', urlPath);
            });
        });
      }

      toggleVisibility();
      navigate(`/project/${projectID}/team`);
    }
  };

  return (
    <ModalTemplate isVisible={isVisible} toggleVisibility={toggleVisibility} title="Edit profile" modalTheme="green">
      <StyledForm onSubmit={handleUpdate}>
        <StyledLabelInputWrapper>
          <StyledLabel htmlFor="file">Photo</StyledLabel>
          <StyledInputFile
            id="file"
            type="file"
            onChange={handlePhotoChange}
            name="content"
            aria-label="Change user profile picture"
            aria-required="true"
            autoComplete="new-password"
            signup
          />
        </StyledLabelInputWrapper>
        <StyledLabelInputWrapper>
          <StyledLabel htmlFor="userName">User name</StyledLabel>
          <StyledInput
            id="userName"
            type="text"
            onChange={handleUserNameChange}
            name="userName"
            value={name}
            aria-label="userName"
            aria-required="true"
            autoComplete="new-password"
            placeholder={currentUser ? currentUser.name : ''}
            signup
          />
        </StyledLabelInputWrapper>
        <StyledButtonWrapper>
          <StyledButton type="submit" color="green">
            Edit
          </StyledButton>
        </StyledButtonWrapper>
      </StyledForm>
    </ModalTemplate>
  );
};

export default EditProfile;
