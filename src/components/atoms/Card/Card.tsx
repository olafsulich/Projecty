import React from 'react';
import { truncateSentence } from '../../../utils/truncateSentence';
import { CardWrapper, ImageWrapper, TextWrapper, CardHeading, Text } from './Card.styles';

interface Props {
  heading: string;
  content?: string;
  type?: string;
  photoURL?: string;
}

const Card: React.FC<Props> = ({ heading, content, type, photoURL }) => {
  return (
    <CardWrapper type={type}>
      {photoURL && (
        <ImageWrapper>
          <img src={photoURL} alt={heading} />
        </ImageWrapper>
      )}
      <TextWrapper>
        <CardHeading>{heading}</CardHeading>
        {content && content.length >= 65 ? <Text>{truncateSentence(content)}...</Text> : <Text>{content}</Text>}
      </TextWrapper>
    </CardWrapper>
  );
};

export default Card;
