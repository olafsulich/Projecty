import React from 'react';
import { RouteComponentProps } from '@reach/router';
// import { auth } from './firebase';
import Projects from './views/projects';
// import useUser from './hooks/useUser';
import SignIn from './views/sign-in';
import { isLoggedIn } from './utils/utils';

type Props = RouteComponentProps;

const Main: React.FC<Props> = () => {
  return <>{isLoggedIn() ? <Projects /> : <SignIn />}</>;
};

export default Main;
