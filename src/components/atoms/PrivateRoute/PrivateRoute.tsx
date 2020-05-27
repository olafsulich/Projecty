import React from 'react';
import { RouteComponentProps } from '@reach/router';
import SignIn from '../../../views/SignIn/SignIn';
import useUser from '../../../hooks/useUser';

interface Props {
  as: React.ComponentType<RouteComponentProps>;
  path: string;
}

const PrivateRoute: React.FC<Props> = ({ as: Component, path }) => {
  const { uid } = useUser();
  return <>{uid ? <Component path={path} /> : <SignIn />}</>;
};

export default PrivateRoute;
