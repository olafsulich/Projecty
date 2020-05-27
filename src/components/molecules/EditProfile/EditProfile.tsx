import React, { useState } from 'react';
import { navigate } from '@reach/router';
import { firestore, storage } from '../../../firebase/index';
import Input from '../../atoms/Input/Input.styles';
import Label from '../../atoms/Label/Label.styles';
import useUser from '../../../hooks/useUser';
import ModalTemplate from '../../../templates/ModalTemplate';
import LabelInputWrapper from '../../atoms/LabelInputWrapper/LabelInputWrapper.styles';
import Button from '../../atoms/Button/Button.styles';
import useTeam from '../../../hooks/useTeam';
import useBacklog from '../../../hooks/useBacklog';
import useSprints from '../../../hooks/useSprints';
import useAnnouncements from '../../../hooks/useAnnouncements';
import { DocumentFromCollection, Image, Collection, InputEvent } from '../../../types/index';
import { types } from '../../../state/enums';
import { Form, ButtonWrapper, InputFile } from './EditProfile.styles';

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
        const filteredMemberId = team.filter(filterCollection);
        const docId = document.id;
        const docRef = firestore.doc(`projects/${projectID}/${collection}/${docId}`);
        const { email, photoURL, uid } = currentUser;
        const userName = currentUser.name;
        const userRole = filteredMemberId[0].user.type;
        if (name) docRef.update({ user: { name, email, photoURL, type: userRole, uid } });
        if (image && photo) docRef.update({ user: { name: userName, email, photoURL: photo, type: userRole, uid } });
      });
    }
  };

  const chooseWhatToUpdate = (urlPath?: string) => {
    const filteredMemberId = team.filter(filterCollection);
    const filteredBacklogs = backlog.filter(filterCollection);
    const filteredSprints = sprints.filter(filterCollection);
    const filteredAnnouncements = announcements.filter(filterCollection);
    if (urlPath) {
      updateDocuments(filteredMemberId, 'team', urlPath);
      updateDocuments(filteredBacklogs, 'backlog', urlPath);
      updateDocuments(filteredSprints, 'sprints', urlPath);
      updateDocuments(filteredAnnouncements, 'announcements', urlPath);
    } else {
      updateDocuments(filteredMemberId, 'team');
      updateDocuments(filteredBacklogs, 'backlog');
      updateDocuments(filteredSprints, 'sprints');
      updateDocuments(filteredAnnouncements, 'announcements');
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

      if (name) {
        docRef.update({ name });
        chooseWhatToUpdate();
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
              chooseWhatToUpdate(urlPath);
            });
        });
      }

      toggleVisibility();
      navigate(`/project/${projectID}/team`);
    }
  };

  return (
    <ModalTemplate isVisible={isVisible} toggleVisibility={toggleVisibility} title="Edit profile" modalTheme="green">
      <Form onSubmit={handleUpdate}>
        <LabelInputWrapper>
          <Label htmlFor="file">Photo</Label>
          <InputFile
            id="file"
            type="file"
            onChange={handlePhotoChange}
            name="content"
            aria-label="Change user profile picture"
            aria-required="true"
            autoComplete="new-password"
            signup
          />
        </LabelInputWrapper>
        <LabelInputWrapper>
          <Label htmlFor="userName">User name</Label>
          <Input
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
        </LabelInputWrapper>
        <ButtonWrapper>
          <Button type="submit" color="green">
            Edit
          </Button>
        </ButtonWrapper>
      </Form>
    </ModalTemplate>
  );
};

export default EditProfile;
