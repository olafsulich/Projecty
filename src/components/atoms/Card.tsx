import React from 'react';
import styled from 'styled-components';
import { trimString } from '../../utils/utils';

const StyledCard = styled.div<{ type?: string }>`
  width: 24rem;
  height: ${({ type }) => (type === 'project' ? '10rem' : '20rem')};
  padding: 2rem 2.2rem;
  display: flex;
  align-items: flex-start;
  justify-items: flex-start;
  font-size: 2rem;
  font-weight: 400;
  border-radius: 7px;
  box-shadow: 3px 6px 10px ${({ theme }) => theme.cardShadow};
  margin-bottom: 6rem;

  @media only screen and (min-width: 950px) {
    width: 30rem;
    padding: 2.4rem 2.6rem 2.4rem 1rem;
  }
`;

const StyledImageWrapper = styled.figure`
  width: 6rem;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }
`;

const StyledTexWrapper = styled.article`
  width: calc(100% - 7rem);
  display: flex;
  align-items: flex-start;
  justify-items: center;
  flex-direction: column;
  font-size: 2rem;
  padding: 1rem;
  word-break: break-word;
`;

const StyledCardHeading = styled.h3`
  font-size: 1.8rem;
  font-weight: 400;
  margin: 0rem 0 0.5rem 0;
  text-transform: capitalize;
`;

const StyledText = styled.p`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.textSecondary};
  font-weight: 400;
`;

interface Props {
  heading: string;
  content?: string;
  type?: string;
  photoURL?: string;
}

const Card: React.FC<Props> = ({ heading, content, type, photoURL }) => {
  return (
    <StyledCard type={type}>
      {photoURL && (
        <StyledImageWrapper>
          <img src={photoURL} alt={heading} />
        </StyledImageWrapper>
      )}
      <StyledTexWrapper>
        <StyledCardHeading>{heading}</StyledCardHeading>
        {content && content.length >= 65 ? <StyledText>{trimString(content)}...</StyledText> : <StyledText>{content}</StyledText>}
      </StyledTexWrapper>
    </StyledCard>
  );
};

export default Card;
