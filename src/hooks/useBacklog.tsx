import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFactory } from '../state/actions';
import { useTypedSelector } from '../utils/utils';

const useBacklog = () => {
  const backlog = useTypedSelector(state => state.backlog);
  const setBacklog = useDispatch();
  const projectId = localStorage.getItem('PROJECT_ID');

  useEffect(() => {
    setBacklog(fetchFactory(projectId, 'FETCH_BACKLOG', 'backlog', 'BACKLOG'));
  }, []);

  return backlog;
};

export default useBacklog;
