import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFactory } from '../state/actions';

interface User {
  user: {
    type: string;
    name: string;
    photoURL: string;
  };
}

interface Team {
  team: User[];
}

const useTeam = () => {
  const team = useSelector<Team>(state => state.team);
  const setTeam = useDispatch();
  const projectId = localStorage.getItem('PROJECT_ID');

  useEffect(() => {
    setTeam(fetchFactory(projectId, 'FETCH_TEAM', 'team', 'TEAM'));
  }, []);

  return team;
};

export default useTeam;
