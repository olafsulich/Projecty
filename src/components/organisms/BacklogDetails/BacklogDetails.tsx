import React, { useState, useEffect } from 'react';
import { RouteComponentProps, useParams, navigate } from '@reach/router';
import useBacklog from '../../../hooks/useBacklog';
import CardDetailsTemplate from '../../../templates/CardDetailsTemplate';
import Select from '../../atoms/Select/Select.styles';
import Option from '../../atoms/Option/Option.styles';
import { firestore } from '../../../firebase/index';
import { Backlog } from '../../../types';
import Button from '../../atoms/Button/Button.styles';
import { types } from '../../../state/enums';
import { isUserOwnership } from '../../../utils/utils';
import { Figure, RoleWrapper, Role } from './BacklogDetails.styles';

const BacklogDetail: React.FC<RouteComponentProps> = () => {
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
          {isUserOwnership(uid) && (
            <Button color="red" onClick={() => handleRemove(backlog.id)}>
              Delete
            </Button>
          )}
        </>
      );
    }
    return null;
  };

  return <CardDetailsTemplate>{backlog ? cardDetail() : null}</CardDetailsTemplate>;
};

export default BacklogDetail;
