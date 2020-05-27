import { navigate } from '@reach/router';
import { auth } from '../firebase';

export const handleSignOut = () => {
  auth.signOut();
  localStorage.clear();
  navigate('/sign-in');
};
