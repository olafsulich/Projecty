import { auth } from '../firebase/index';

export const isLoggedIn = (): boolean => {
  if (auth.currentUser) return true;
  return false;
};

export const documentsCollection = (doc: { id: string; data: () => {} }) => ({ id: doc.id, ...doc.data() });

export const trimString = (string: string) => string.replace(/^(.{65}[^\s]*).*/, '$1');
