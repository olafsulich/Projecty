import { navigate } from '@reach/router';
import { auth } from '../firebase';
import { createUserDoc } from '../utils/createUserDoc';

export const handleSignUp = async (email: string, password: string, name: string) => {
  if (auth) {
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        const user = auth.currentUser;
        createUserDoc(user, name);
        navigate('/start-new-project');
      })
      .catch(() => alert(`Email is already in use, sign in or use other email`));
  }
};
