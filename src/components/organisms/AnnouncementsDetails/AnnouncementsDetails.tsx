import React, { useState, useEffect } from 'react';
import { RouteComponentProps, useParams, navigate } from '@reach/router';
import CardDetailsTemplate from '../../../templates/CardDetailsTemplate';
import useAnnouncements from '../../../hooks/useAnnouncements';
import { Announcement } from '../../../types';
import Button from '../../atoms/Button/Button.styles';
import { firestore } from '../../../firebase/index';
import { types } from '../../../state/enums';
import { isUserOwnership } from '../../../utils/isUserOwnership';
import { Figure, RoleWrapper, Role } from './AnnouncementsDetails.styles';

const AnnouncementsDetails: React.FC<RouteComponentProps> = () => {
  const [announcement, setAnnouncement] = useState<Announcement>();
  const { id } = useParams();
  const announcements = useAnnouncements();
  const { PROJECT_ID, PROJECT_KEY } = types;
  const projectID = localStorage.getItem(PROJECT_ID);
  const projectKey = localStorage.getItem(PROJECT_KEY);
  const announcementRef = firestore.doc(`projects/${projectID}`).collection('announcements');
  const matchedAnnouncements = announcements.find((doc: Announcement) => doc.id === id);

  useEffect(() => {
    setAnnouncement(matchedAnnouncements);
  }, [matchedAnnouncements]);

  const handleRemove = (docId: string) => {
    announcementRef.doc(docId).delete();
    navigate(`/project/${projectKey}/announcements`);
  };

  const cardDetail = () => {
    if (announcement) {
      const {
        user: { photoURL, name, uid },
        content,
        type,
      } = announcement;
      return (
        <>
          <Figure>
            <img src={photoURL} alt={name} />
            <figcaption>{name}</figcaption>
          </Figure>
          <RoleWrapper>
            <Role heading>Content:</Role>
            <Role>{content}</Role>
          </RoleWrapper>
          <RoleWrapper>
            <Role heading>Type:</Role>
            <Role>{type}</Role>
          </RoleWrapper>
          {isUserOwnership(uid) && (
            <Button color="red" onClick={() => handleRemove(announcement.id)}>
              Delete
            </Button>
          )}
        </>
      );
    }
    return null;
  };

  return <CardDetailsTemplate>{announcement ? cardDetail() : null}</CardDetailsTemplate>;
};

export default AnnouncementsDetails;
