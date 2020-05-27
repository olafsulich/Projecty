import { navigate } from '@reach/router';
import { auth } from '../firebase';

export const handleSignIn = async (email: string, password: string) => {
  if (auth)
    await auth
      .signInWithEmailAndPassword(email, password)
      .then(() => navigate(`/projects`))
      .catch(() => alert(`Email is already in use, sign in or use other email`));
};
