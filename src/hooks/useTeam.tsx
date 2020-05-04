import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFactory } from '../state/actions';
import { useTypedSelector } from '../utils/utils';
import { types } from '../state/enums';

const useTeam = () => {
  const team = useTypedSelector(state => state.team);
  const setTeam = useDispatch();
  const projectId = localStorage.getItem('PROJECT_ID');
  const { FETCH_TEAM, TEAM } = types;

  useEffect(() => {
    setTeam(fetchFactory(projectId, FETCH_TEAM, TEAM));
  }, []);

  return team;
};

export default useTeam;
