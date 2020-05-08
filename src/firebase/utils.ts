import { User } from 'firebase/app';
import { firestore } from './index';
import DefaultUser from '../assets/default-user-image.png';

/* eslint-disable */
export const getUserDoc = async (uid: string | undefined) => {
  if (!uid) return null;
  try {
    const userDoc = await firestore
      .collection('users')
      .doc(uid)
      .get();
    return { uid, ...userDoc.data() };
  } catch (error) {
    console.log('Error with firebase getUserDoc :OOOO!!!!', error);
  }
};

export const createUserDoc = async (user: User | null, name?: string) => {
  if (!user) return;
  const userRef = await firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, uid } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        email,
        photoURL: DefaultUser,
        createdAt,
        name,
        uid,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return getUserDoc(user.uid);
};
