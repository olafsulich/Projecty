import { User } from 'firebase/app';
import { firestore } from '../firebase/index';
import DefaultUser from '../assets/default-user-image.png';
import { getUserDoc } from './getUserDoc';

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
