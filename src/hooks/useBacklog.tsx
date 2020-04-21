import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFactory } from '../actions';

const useBacklog = () => {
  const backlog = useSelector<any>(state => state.backlog);
  const setBacklog = useDispatch();
  const projectId = localStorage.getItem('PROJECT_ID');

  useEffect(() => {
    setBacklog(fetchFactory(projectId, 'FETCH_BACKLOG', 'backlog', 'BACKLOG'));
  }, []);

  return backlog;
};

export default useBacklog;
