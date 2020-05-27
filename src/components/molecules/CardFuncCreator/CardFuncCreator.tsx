import React from 'react';
import { types } from '../../../state/enums/index';
import { Backlog, Announcement, Sprint } from '../../../types';
import Card from '../../atoms/Card/Card';
import { Link } from './CardFuncCreator.styles';

type Collection = Backlog | Announcement | Sprint;

const cardFuncCreator = (cardType: string, collection: Collection[], collectionName: string) => {
  const { PROJECT_KEY } = types;
  const projectKey = localStorage.getItem(PROJECT_KEY);
  if (collection) {
    return collection
      .filter((doc: Collection) => doc.type === cardType)
      .map(({ type, content, id, user: { name, photoURL } }: Collection) => (
        <Link key={id} to={`/project/${projectKey}/${collectionName}/${id}`}>
          <Card photoURL={photoURL} heading={name} content={content} type={type} />
        </Link>
      ));
  }
  return null;
};

export default cardFuncCreator;
