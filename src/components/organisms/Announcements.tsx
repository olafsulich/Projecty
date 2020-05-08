import React from 'react';
import { RouteComponentProps } from '@reach/router';
import PageTemplate from '../../templates/PageTemplate';
import Category from '../molecules/Category';
import useAnnouncements from '../../hooks/useAnnouncements';
import { announcementsInfo } from '../../data';
import cardFuncCreator from '../molecules/CardFuncCreator';

type Props = RouteComponentProps;

const Announcements: React.FC<Props> = () => {
  const announcements = useAnnouncements();

  return (
    <PageTemplate pageHeading="Announcements">
      {announcementsInfo.map(({ type, heading }) => {
        return (
          <Category key={type} type={type} heading={heading}>
            {cardFuncCreator(heading, announcements)}
          </Category>
        );
      })}
    </PageTemplate>
  );
};

export default Announcements;
