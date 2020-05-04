import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { auth } from '../firebase/index';
import { InitState } from '../state/reducers/index';

export const isLoggedIn = (): boolean => {
  if (auth.currentUser) return true;
  return false;
};

export const documentsCollection = (doc: { id: string; data: () => {} }) => ({ id: doc.id, ...doc.data() });

export const trimString = (string: string) => string.replace(/^(.{65}[^\s]*).*/, '$1');

export const useTypedSelector: TypedUseSelectorHook<InitState> = useSelector;

export const isUserOwnership = (docUserId: string): boolean => {
  if (auth.currentUser?.uid === docUserId) return true;
  return false;
};
