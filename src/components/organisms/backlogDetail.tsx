import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { RouteComponentProps, useParams, navigate } from '@reach/router';
import useBacklog from '../../hooks/useBacklog';
import CardDetailsTemplate from '../../templates/CardDetailsTemplate';
import StyledSelect from '../atoms/Select';
import StyledOption from '../atoms/Option';
import { firestore } from '../../firebase/index';
import { Backlog } from '../../types';
import StyledButton from '../atoms/Button';
import { types } from '../../state/enums';
import { isUserOwnership } from '../../utils/utils';

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

const BacklogDetail: React.FC<Props> = () => {
  const [backlog, setBacklog] = useState<Backlog>();
  const { id } = useParams();
  const backlogs = useBacklog();
  const { PROJECT_ID, PROJECT_KEY } = types;
  const projectID = localStorage.getItem(PROJECT_ID);
  const projectKey = localStorage.getItem(PROJECT_KEY);
  const backlogsRef = firestore.doc(`projects/${projectID}`).collection('backlog');
  const matchedBacklog = backlogs.find((doc: Backlog) => doc.id === id);

  const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const docRef = firestore.doc(`projects/${projectID}/backlog/${matchedBacklog ? matchedBacklog.id : ''}`);
    docRef.update({ type: e.target.value });
    navigate(`/project/${projectKey}/backlog`);
  };

  useEffect(() => {
    setBacklog(matchedBacklog);
  }, [matchedBacklog]);

  const handleRemove = (docId: string) => {
    backlogsRef.doc(docId).delete();
    navigate(`/project/${projectKey}/backlog`);
  };

  const cardDetail = () => {
    if (backlog) {
      const {
        user: { photoURL, name, uid },
        content,
        type,
      } = backlog;
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
          {isUserOwnership(uid) && (
            <StyledButton color="red" onClick={() => handleRemove(backlog.id)}>
              Delete
            </StyledButton>
          )}
        </>
      );
    }
    return null;
  };

  return <CardDetailsTemplate>{backlog ? cardDetail() : null}</CardDetailsTemplate>;
};

export default BacklogDetail;
