import { firestore } from './index';

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

export const createUserDoc = async (user: any, name?: string) => {
  if (!user) return;
  const userRef = await firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, uid } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        email,
        photoURL: 'https://pngimage.net/wp-content/uploads/2018/05/default-user-profile-image-png-7.png',
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
