import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFactory } from '../state/actions';
import { useTypedSelector } from '../utils/utils';

const useAnnouncements = () => {
  const announcements = useTypedSelector(state => state.announcements);
  const setAnnouncements = useDispatch();
  const projectId = localStorage.getItem('PROJECT_ID');

  useEffect(() => {
    setAnnouncements(fetchFactory(projectId, 'FETCH_ANNOUNCEMENTS', 'announcements', 'ANNOUNCEMENTS'));
  }, []);

  return announcements;
};

export default useAnnouncements;
