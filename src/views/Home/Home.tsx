import React from 'react';
import { RouteComponentProps } from '@reach/router';
import Projects from '../Projects/Projects';
import useUser from '../../hooks/useUser';
import SignIn from '../SignIn/SignIn';
import { isLoggedIn } from '../../utils/utils';

const Main: React.FC<RouteComponentProps> = () => {
  useUser();
  return <>{isLoggedIn() ? <Projects /> : <SignIn />}</>;
};

export default Main;
