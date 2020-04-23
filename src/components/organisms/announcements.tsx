import React from 'react';
import { RouteComponentProps, Link } from '@reach/router';
import PageTemplate from '../../templates/PageTemplate';
import Card from '../atoms/Card';
import Category from '../molecules/Category';
import useAnnouncements from '../../hooks/useAnnouncements';
import { Announcement } from '../../types';

type Props = RouteComponentProps;

const Announcements: React.FC<Props> = () => {
  const announcements = useAnnouncements();
  const projectKey = localStorage.getItem('PROJECT_KEY');

  const cardFuncCreator = (cardType: string) => {
    if (announcements) {
      return announcements
        .filter((doc: Announcement) => doc.type === cardType)
        .map(({ type, content, id, user: { name, photoURL } }: Announcement) => (
          <Link key={id} to={`/project/${projectKey}/announcements/${id}`}>
            <Card photoURL={photoURL} heading={name} content={content} type={type} />
          </Link>
        ));
    }
    return null;
  };

  return (
    <PageTemplate pageHeading="Announcements">
      <Category type="orange" heading="Information">
        {cardFuncCreator('Information')}
      </Category>
      <Category type="green" heading="Meeting">
        {cardFuncCreator('Meeting')}
      </Category>
      <Category type="red" heading="Deadline">
        {cardFuncCreator('Deadline')}
      </Category>
      <Category type="blue" heading="Other">
        {cardFuncCreator('Other')}
      </Category>
    </PageTemplate>
  );
};

export default Announcements;
