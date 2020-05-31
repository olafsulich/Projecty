import React from 'react';
import { RouteComponentProps } from '@reach/router';
import PageTemplate from '../../../templates/PageTemplate/PageTemplate';
import Category from '../../molecules/Category/Category';
import useAnnouncements from '../../../hooks/useAnnouncements';
import { announcementsInfo } from '../../../data/projectPagesData';
import cardFuncCreator from '../../molecules/CardFuncCreator/CardFuncCreator';

const Announcements: React.FC<RouteComponentProps> = () => {
  const announcements = useAnnouncements();

  return (
    <PageTemplate pageHeading="Announcements">
      {announcementsInfo.map(({ type, heading }) => {
        return (
          <Category key={type} type={type} heading={heading}>
            {cardFuncCreator(heading, announcements, 'announcements')}
          </Category>
        );
      })}
    </PageTemplate>
  );
};

export default Announcements;
