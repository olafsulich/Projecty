import React from 'react';
import { RouteComponentProps } from '@reach/router';
import Projects from './Projects';
import useUser from '../hooks/useUser';
import SignIn from './SignIn';
import { isLoggedIn } from '../utils/utils';

type Props = RouteComponentProps;

const Main: React.FC<Props> = () => {
  useUser();
  return <>{isLoggedIn() ? <Projects /> : <SignIn />}</>;
};

export default Main;
