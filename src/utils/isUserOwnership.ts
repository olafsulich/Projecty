import { auth } from '../firebase';

export const isUserOwnership = (docUserId: string): boolean => {
  if (auth.currentUser?.uid === docUserId) return true;
  return false;
};
