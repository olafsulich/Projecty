import React, { useState, useEffect } from 'react';
import { RouteComponentProps, useParams, navigate } from '@reach/router';
import CardDetailsTemplate from '../../../templates/CardDetailsTemplate';
import useSprints from '../../../hooks/useSprints';
import Select from '../../atoms/Select/Select.styles';
import Option from '../../atoms/Option/Option.styles';
import { firestore } from '../../../firebase/index';
import { Sprint } from '../../../types';
import Button from '../../atoms/Button/Button.styles';
import { types } from '../../../state/enums';
import { isUserOwnership } from '../../../utils/utils';
import { Figure, RoleWrapper, Role } from './SprintDetails.styles';

const SprintDetail: React.FC<RouteComponentProps> = () => {
  const [sprint, setSprint] = useState<Sprint>();
  const { id } = useParams();
  const sprints = useSprints();
  const { PROJECT_ID, PROJECT_KEY } = types;
  const projectID = localStorage.getItem(PROJECT_ID);
  const projectKey = localStorage.getItem(PROJECT_KEY);
  const sprintsRef = firestore.doc(`projects/${projectID}`).collection('sprints');
  const matchedSprint = sprints.find((doc: Sprint) => doc.id === id);

  const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const docRef = firestore.doc(`projects/${projectID}/sprints/${matchedSprint ? matchedSprint.id : ''}`);
    docRef.update({ type: e.target.value });
    navigate(`/project/${projectKey}/sprints`);
  };

  useEffect(() => {
    setSprint(matchedSprint);
  }, [matchedSprint]);

  const handleRemove = (docId: string) => {
    sprintsRef.doc(docId).delete();
    navigate(`/project/${projectKey}/sprints`);
  };
  const cardDetail = () => {
    if (sprint) {
      const {
        user: { photoURL, name, uid },
        content,
        type,
        days,
      } = sprint;
      return (
        <>
          <Figure>
            <img src={photoURL} alt={name} />
            <figcaption>{name}</figcaption>
          </Figure>
          <RoleWrapper>
            <Role heading>Content:</Role>
            <Role>{content}</Role>
          </RoleWrapper>
          <RoleWrapper>
            <Role heading>Type:</Role>
            <Role>{type}</Role>
          </RoleWrapper>
          <RoleWrapper>
            <Role heading>Change type:</Role>
            <Select
              details
              id="selected"
              name="selected"
              onChange={onSelect}
              aria-label="selected"
              aria-required="true"
              autoComplete="new-password"
            >
              <Option value="" selected disabled hidden>
                Select type
              </Option>
              <Option>To do</Option>
              <Option>In progress</Option>
              <Option>Finished</Option>
            </Select>
          </RoleWrapper>
          <RoleWrapper>
            <Role heading>Duration:</Role>
            <Role>{days} days</Role>
          </RoleWrapper>
          {isUserOwnership(uid) && (
            <Button color="red" onClick={() => handleRemove(sprint.id)}>
              Delete
            </Button>
          )}
        </>
      );
    }
    return null;
  };

  return <CardDetailsTemplate>{sprint ? cardDetail() : null}</CardDetailsTemplate>;
};

export default SprintDetail;
