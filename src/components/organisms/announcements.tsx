import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps, Link } from '@reach/router';
import PageTemplate from '../../templates/PageTemplate';
import Card from '../atoms/Card';
import Category from '../molecules/Category';
import useAnnouncements from '../../hooks/useAnnouncements';
import { Announcement } from '../../types';
import { types } from '../../state/enums';

const StyledLink = styled(Link)`
  :focus {
    div {
      border: 2px solid ${({ theme }) => theme.typeCardSecondary};
    }
  }
`;

type Props = RouteComponentProps;

const Announcements: React.FC<Props> = () => {
  const announcements = useAnnouncements();
  const { PROJECT_KEY } = types;
  const projectKey = localStorage.getItem(PROJECT_KEY);

  const cardFuncCreator = (cardType: string) => {
    if (announcements) {
      return announcements
        .filter((doc: Announcement) => doc.type === cardType)
        .map(({ type, content, id, user: { name, photoURL } }: Announcement) => (
          <StyledLink key={id} to={`/project/${projectKey}/announcements/${id}`}>
            <Card photoURL={photoURL} heading={name} content={content} type={type} />
          </StyledLink>
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
