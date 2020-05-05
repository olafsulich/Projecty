import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../state/actions';
import { useTypedSelector } from '../utils/utils';

const useUser = () => {
  const currentUser = useTypedSelector(state => state.currentUser);
  const fetchUser = useDispatch();

  useEffect(() => {
    fetchUser(setCurrentUser());
  }, [fetchUser]);
  return currentUser;
};

export default useUser;
