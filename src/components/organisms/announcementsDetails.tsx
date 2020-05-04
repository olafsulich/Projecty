import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { RouteComponentProps, useParams, navigate } from '@reach/router';
import CardDetailsTemplate from '../../templates/CardDetailsTemplate';
import useAnnouncements from '../../hooks/useAnnouncements';
import { Announcement } from '../../types';
import StyledButton from '../atoms/Button';
import { firestore } from '../../firebase/index';
import { types } from '../../state/enums';

const StyledFigure = styled.figure`
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: flex-start;
  margin-bottom: 3rem;

  img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    margin-right: 1.4rem;
  }

  figcaption {
    font-size: 1.8rem;
  }
`;

const StyledRoleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: flex-start;
  margin-bottom: 3rem;
`;

const StyledRole = styled.p<{ heading?: boolean }>`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.textSecondary};

  ${({ heading }) =>
    heading &&
    css`
      color: ${({ theme }) => theme.textPrimary};
      margin-right: 1rem;
      max-width: 50%;
    `};
`;

type Props = RouteComponentProps;

const AnnouncementsDetails: React.FC<Props> = () => {
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
  }, []);

  const handleRemove = (docId: string) => {
    announcementRef.doc(docId).delete();
    navigate(`/project/${projectKey}/announcements`);
  };

  const cardDetail = () => {
    if (announcement) {
      const {
        user: { photoURL, name },
        content,
        type,
      } = announcement;
      return (
        <>
          <StyledFigure>
            <img src={photoURL} alt={name} />
            <figcaption>{name}</figcaption>
          </StyledFigure>
          <StyledRoleWrapper>
            <StyledRole heading>Content:</StyledRole>
            <StyledRole>{content}</StyledRole>
          </StyledRoleWrapper>
          <StyledRoleWrapper>
            <StyledRole heading>Type:</StyledRole>
            <StyledRole>{type}</StyledRole>
          </StyledRoleWrapper>
          <StyledButton color="red" onClick={() => handleRemove(announcement.id)}>
            Delete
          </StyledButton>
        </>
      );
    }
    return null;
  };

  return <CardDetailsTemplate>{announcement ? cardDetail() : null}</CardDetailsTemplate>;
};

export default AnnouncementsDetails;
