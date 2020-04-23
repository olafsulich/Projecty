import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFactory } from '../state/actions';
import { useTypedSelector } from '../utils/utils';

const useSprints = () => {
  const sprints = useTypedSelector(state => state.sprints);
  const setSprints = useDispatch();
  const projectId = localStorage.getItem('PROJECT_ID');

  useEffect(() => {
    setSprints(fetchFactory(projectId, 'FETCH_SPRINTS', 'sprints', 'SPRINTS'));
  }, []);

  return sprints;
};

export default useSprints;
