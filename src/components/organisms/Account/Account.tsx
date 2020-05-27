import React from 'react';
import { RouteComponentProps } from '@reach/router';
import useUser from '../../../hooks/useUser';
import PageTemplate from '../../../templates/PageTemplate';
import Button from '../../atoms/Button/Button.styles';
import { Figure, RoleWrapper, Role, Card } from './Account.styles';
import { handleSignOut } from '../../../utils/utils';

const Account: React.FC<RouteComponentProps> = () => {
  const { photoURL, email, name } = useUser();

  return (
    <>
      <PageTemplate pageHeading="Account">
        <Card>
          <Figure>
            <figcaption>Photo:</figcaption>
            <img src={photoURL} alt={name} />
          </Figure>
          <RoleWrapper>
            <Role heading>Name:</Role>
            <Role>{name}</Role>
          </RoleWrapper>
          <RoleWrapper>
            <Role heading>Email:</Role>
            <Role>{email}</Role>
          </RoleWrapper>
          <Button color="green" onClick={handleSignOut}>
            logout
          </Button>
        </Card>
      </PageTemplate>
    </>
  );
};

export default Account;
