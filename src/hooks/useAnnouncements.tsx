import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFactory } from '../state/actions';

const useAnnouncements = () => {
  const announcements = useSelector<any>(state => state.announcements);
  const setAnnouncements = useDispatch();
  const projectId = localStorage.getItem('PROJECT_ID');

  useEffect(() => {
    setAnnouncements(fetchFactory(projectId, 'FETCH_ANNOUNCEMENTS', 'announcements', 'ANNOUNCEMENTS'));
  }, []);

  return announcements;
};

export default useAnnouncements;
