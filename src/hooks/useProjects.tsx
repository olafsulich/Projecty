import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjects } from '../state/actions';

interface Projects {
  projects: [];
}

const useProjects = () => {
  const projects: any = useSelector<Projects>(state => state.projects);
  const setProjects = useDispatch();

  useEffect(() => {
    setProjects(fetchProjects());
  }, []);

  return projects;
};

export default useProjects;
