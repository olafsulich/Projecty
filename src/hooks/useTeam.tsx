import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFactory } from '../state/actions';
import { useTypedSelector } from '../helpers/useTypedSelector';
import { types } from '../state/enums';

const useTeam = () => {
  const team = useTypedSelector(state => state.team);
  const setTeam = useDispatch();
  const projectId = localStorage.getItem('PROJECT_ID');
  const { FETCH_TEAM, TEAM } = types;

  useEffect(() => {
    setTeam(fetchFactory(projectId, FETCH_TEAM, TEAM));
  }, [projectId, FETCH_TEAM, TEAM, setTeam]);

  return team;
};

export default useTeam;
