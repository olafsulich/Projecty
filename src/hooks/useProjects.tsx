import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProjects } from '../state/actions';
import { useTypedSelector } from '../utils/utils';

const useProjects = () => {
  const projects = useTypedSelector(state => state.projects);
  const setProjects = useDispatch();

  useEffect(() => {
    setProjects(fetchProjects());
  }, [setProjects]);

  return projects;
};

export default useProjects;
