import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { RouteComponentProps, useParams } from '@reach/router';
import CardDetailsTemplate from '../../templates/CardDetailsTemplate';
import useAnnouncements from '../../hooks/useAnnouncements';
import { Announcement } from '../../types';

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

  const matchedAnnouncements = announcements.find((doc: Announcement) => doc.id === id);

  useEffect(() => {
    setAnnouncement(matchedAnnouncements);
  }, []);

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
        </>
      );
    }
    return null;
  };

  return <CardDetailsTemplate>{announcement ? cardDetail() : null}</CardDetailsTemplate>;
};

export default AnnouncementsDetails;
