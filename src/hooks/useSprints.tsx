import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFactory } from '../state/actions';

const useSprints = () => {
  const sprints = useSelector<any>(state => state.sprints);
  const setSprints = useDispatch();
  const projectId = localStorage.getItem('PROJECT_ID');

  useEffect(() => {
    setSprints(fetchFactory(projectId, 'FETCH_SPRINTS', 'sprints', 'SPRINTS'));
  }, []);

  return sprints;
};

export default useSprints;
