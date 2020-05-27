import React, { useState, useEffect } from 'react';
import { RouteComponentProps, useParams } from '@reach/router';
import useTeam from '../../../hooks/useTeam';
import CardDetailsTemplate from '../../../templates/CardDetailsTemplate';
import { Member } from '../../../types';
import { Figure, RoleWrapper, Role } from './MemberDetails.styles';

const MemberDetails: React.FC<RouteComponentProps> = () => {
  const [member, setMember] = useState<Member>();
  const { id } = useParams();
  const team = useTeam();

  const matchedUser = team.find((doc: Member) => doc.user.uid === id);

  useEffect(() => {
    setMember(matchedUser);
  }, [matchedUser]);

  const cardDetail = () => {
    if (member) {
      const {
        user: { photoURL, name, type, email },
      } = member;
      return (
        <>
          <Figure>
            <img src={photoURL} alt={name} />
            <figcaption>{name}</figcaption>
          </Figure>
          <RoleWrapper>
            <Role heading>Type:</Role>
            <Role>{type}</Role>
          </RoleWrapper>
          <RoleWrapper>
            <Role heading>Email:</Role>
            <Role>{email}</Role>
          </RoleWrapper>
        </>
      );
    }
    return null;
  };

  return <CardDetailsTemplate>{member ? cardDetail() : null}</CardDetailsTemplate>;
};

export default MemberDetails;
