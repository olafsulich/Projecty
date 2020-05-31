import { navigate } from '@reach/router';
import { auth } from '../firebase';
import { incorrectData } from '../helpers/errorMessages';

export const handleSignIn = async (email: string, password: string) => {
  if (auth)
    await auth
      .signInWithEmailAndPassword(email, password)
      .then(() => navigate(`/projects`))
      .catch(() => alert(incorrectData));
};
