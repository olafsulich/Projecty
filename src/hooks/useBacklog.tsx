import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFactory } from '../state/actions';
import { useTypedSelector } from '../utils/utils';
import { types } from '../state/enums';

const useBacklog = () => {
  const backlog = useTypedSelector(state => state.backlog);
  const setBacklog = useDispatch();
  const projectId = localStorage.getItem('PROJECT_ID');
  const { FETCH_BACKLOG, BACKLOG } = types;

  useEffect(() => {
    setBacklog(fetchFactory(projectId, FETCH_BACKLOG, BACKLOG));
  }, [projectId, FETCH_BACKLOG, BACKLOG, setBacklog]);

  return backlog;
};

export default useBacklog;
