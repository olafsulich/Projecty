import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from '../actions';

interface User {
  currentUser: {
    uid: string;
    photoURL: string;
    email: string;
    name: string;
  };
}

const useUser = () => {
  const currentUser: any = useSelector<User>(state => state.currentUser);
  const fetchUser = useDispatch();

  useEffect(() => {
    fetchUser(setCurrentUser());
  }, []);
  return currentUser;
};

export default useUser;
