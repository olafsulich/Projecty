import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { RouteComponentProps, useParams, navigate } from '@reach/router';
import CardDetailsTemplate from '../../templates/CardDetailsTemplate';
import useSprints from '../../hooks/useSprints';
import StyledSelect from '../atoms/Select';
import StyledOption from '../atoms/Option';
import { firestore } from '../../firebase/index';
import { Sprint } from '../../types';
import StyledButton from '../atoms/Button';

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
    `};
`;

type Props = RouteComponentProps;

const SprintDetail: React.FC<Props> = () => {
  const [sprint, setSprint] = useState<Sprint>();
  const { id } = useParams();
  const sprints = useSprints();
  const projectID = localStorage.getItem('PROJECT_ID');
  const projectKey = localStorage.getItem('PROJECT_KEY');
  const sprintsRef = firestore.doc(`projects/${projectID}`).collection('sprints');
  const matchedSprint = sprints.find((doc: Sprint) => doc.id === id);

  const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const docRef = firestore.doc(`projects/${projectID}/sprints/${matchedSprint ? matchedSprint.id : ''}`);
    docRef.update({ type: e.target.value });
    navigate(`/project/${projectKey}/sprints`);
  };

  useEffect(() => {
    setSprint(matchedSprint);
  }, []);

  const handleRemove = (docId: string) => {
    sprintsRef.doc(docId).delete();
    navigate(`/project/${projectKey}/sprints`);
  };
  const cardDetail = () => {
    if (sprint) {
      const {
        user: { photoURL, name },
        content,
        type,
        days,
      } = sprint;
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
          <StyledRoleWrapper>
            <StyledRole heading>Change type:</StyledRole>
            <StyledSelect
              details
              id="selected"
              name="selected"
              onChange={onSelect}
              aria-label="selected"
              aria-required="true"
              autoComplete="new-password"
            >
              <StyledOption value="" selected disabled hidden>
                Select type
              </StyledOption>
              <StyledOption>To do</StyledOption>
              <StyledOption>In progress</StyledOption>
              <StyledOption>Finished</StyledOption>
            </StyledSelect>
          </StyledRoleWrapper>
          <StyledRoleWrapper>
            <StyledRole heading>Duration:</StyledRole>
            <StyledRole>{days} days</StyledRole>
          </StyledRoleWrapper>
          <StyledButton color="red" onClick={() => handleRemove(sprint.id)}>
            Delete
          </StyledButton>
        </>
      );
    }
    return null;
  };

  return <CardDetailsTemplate>{sprint ? cardDetail() : null}</CardDetailsTemplate>;
};

export default SprintDetail;
