import { navigate } from '@reach/router';
import { auth } from '../firebase/index';

export const isLoggedIn = (): boolean => {
  if (auth.currentUser) return true;
  return false;
};

export const documentsCollection = (doc: { id: string; data: () => {} }) => ({ id: doc.id, ...doc.data() });

export const truncateSentence = (string: string) => string.replace(/^(.{65}[^\s]*).*/, '$1');

export const isUserOwnership = (docUserId: string): boolean => {
  if (auth.currentUser?.uid === docUserId) return true;
  return false;
};

export const handleSignOut = () => {
  auth.signOut();
  localStorage.clear();
  navigate('/sign-in');
};
