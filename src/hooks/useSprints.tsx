import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFactory } from '../state/actions';
import { useTypedSelector } from '../utils/utils';
import { types } from '../state/enums';

const useSprints = () => {
  const sprints = useTypedSelector(state => state.sprints);
  const setSprints = useDispatch();
  const projectId = localStorage.getItem('PROJECT_ID');
  const { FETCH_SPRINTS, SPRINTS } = types;

  useEffect(() => {
    setSprints(fetchFactory(projectId, FETCH_SPRINTS, SPRINTS));
  }, []);

  return sprints;
};

export default useSprints;
