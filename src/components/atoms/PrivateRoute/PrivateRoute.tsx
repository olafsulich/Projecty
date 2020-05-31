import React from 'react';
import SignIn from '../../../views/SignIn/SignIn';
import useUser from '../../../hooks/useUser';
import { Props } from './PrivateRoute.types';

const PrivateRoute: React.FC<Props> = ({ as: Component, path }) => {
  const { uid } = useUser();
  return <>{uid ? <Component path={path} /> : <SignIn />}</>;
};

export default PrivateRoute;
