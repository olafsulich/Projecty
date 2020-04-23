import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFactory } from '../state/actions';
import { useTypedSelector } from '../utils/utils';

const useTeam = () => {
  const team = useTypedSelector(state => state.team);
  const setTeam = useDispatch();
  const projectId = localStorage.getItem('PROJECT_ID');

  useEffect(() => {
    setTeam(fetchFactory(projectId, 'FETCH_TEAM', 'team', 'TEAM'));
  }, []);

  return team;
};

export default useTeam;
