import { auth } from '../firebase';

export const isLoggedIn = (): boolean => {
  if (auth.currentUser) return true;
  return false;
};
