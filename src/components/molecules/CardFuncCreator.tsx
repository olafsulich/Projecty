import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import { types } from '../../state/enums/index';
import { Backlog, Announcement, Sprint } from '../../types';
import Card from '../atoms/Card';

const StyledLink = styled(Link)`
  :focus {
    div {
      border: 2px solid ${({ theme }) => theme.typeCardSecondary};
    }
  }
`;

type Collection = Backlog | Announcement | Sprint;

const cardFuncCreator = (cardType: string, collection: Collection[]) => {
  const { PROJECT_KEY } = types;
  const projectKey = localStorage.getItem(PROJECT_KEY);
  if (collection) {
    return collection
      .filter((doc: Collection) => doc.type === cardType)
      .map(({ type, content, id, user: { name, photoURL } }: Collection) => (
        <StyledLink key={id} to={`/project/${projectKey}/${collection.toString()}/${id}`}>
          <Card photoURL={photoURL} heading={name} content={content} type={type} />
        </StyledLink>
      ));
  }
  return null;
};

export default cardFuncCreator;
