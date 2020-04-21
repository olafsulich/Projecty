import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { RouteComponentProps, useParams, navigate } from '@reach/router';
import useBacklog from '../../hooks/useBacklog';
import CardDetailsTemplate from '../../templates/CardDetailsTemplate';
import StyledSelect from '../atoms/Select';
import StyledOption from '../atoms/Option';
import { firestore } from '../../firebase/index';

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
  const [backlog, setBacklog] = useState<any>();
  const { id } = useParams();
  const backlogs: any = useBacklog();
  const projectID = localStorage.getItem('PROJECT_ID');
  const projectKey = localStorage.getItem('PROJECT_KEY');

  const matchedBacklog = backlogs.find((doc: any) => doc.id === id);

  const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const docRef = firestore.doc(`projects/${projectID}/backlog/${matchedBacklog.id}`);
    docRef.update({ type: e.target.value });
    navigate(`/project/${projectKey}/backlog`);
  };

  useEffect(() => {
    setBacklog(matchedBacklog);
  }, []);

  const cardDetail = () => {
    const {
      user: { photoURL, name },
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
      </>
    );
  };

  return <CardDetailsTemplate>{backlog ? cardDetail() : null}</CardDetailsTemplate>;
};

export default BacklogDetail;
