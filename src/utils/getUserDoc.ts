import { firestore } from '../firebase/index';

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
