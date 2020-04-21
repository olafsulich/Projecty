import { auth, firestore } from '../firebase/index';
import { createUserDoc } from '../firebase/utils';
import { documentsCollection } from '../utils/utils';

export const SET_USER = 'SET_USER';
export const CURRENT_USER = 'CURRENT_USER';
export const PROJECT_KEY = 'PROJECT_KEY';
export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const PROJECTS = 'PROJECTS';
export const TEAM = 'TEAM';
export const FETCH_TEAM = 'FETCH_TEAM';
export const FETCH_ANNOUNCEMENTS = 'FETCH_ANNOUNCEMENTS';
export const ANNOUNCEMENTS = 'ANNOUNCEMENTS';
export const FETCH_BACKLOG = 'FETCH_BACKLOG';
export const BACKLOG = 'BACKLOG';
export const FETCH_SPRINTS = 'FETCH_SPRINTS';
export const SPRINTS = 'SPRINTS';
export const PROJECT_ID = 'PROJECT_ID';
export const SET_PROJECT_ID = 'SET_PROJECT_ID';

export const setCurrentUser = () => (dispatch: any) => {
  dispatch({ type: SET_USER });
  if (auth) {
    return auth.onAuthStateChanged(async user => {
      const authUser = await createUserDoc(user);
      dispatch({ type: CURRENT_USER, payload: { ...authUser } });
    });
  }
};

export const getProjectID = (projects: any, key: any) => (dispatch: any) => {
  dispatch({ type: SET_PROJECT_ID });

  const setProjectID = () => {
    const projectID = projects.filter((doc: { key: string }) => doc.key === key)[0].id;
    dispatch({ type: PROJECT_ID, payload: projectID });
    localStorage.setItem(PROJECT_ID, projectID);
  };

  return setProjectID();
};

export const setProjectKey = (key: string) => (dispatch: any) => {
  dispatch({ type: PROJECT_KEY, payload: key });
  localStorage.setItem(PROJECT_KEY, key);
};

export const fetchProjects = () => (dispatch: any) => {
  dispatch({ type: FETCH_PROJECTS });
  return firestore.collection('projects').onSnapshot((snapshot: firebase.firestore.QuerySnapshot) => {
    const dataFromSnapshot = snapshot.docs.map(documentsCollection);
    dispatch({ type: PROJECTS, payload: dataFromSnapshot });
  });
};

export const fetchFactory = (key: string | null, fetch: string, collection: string, state: string) => (dispatch: any) => {
  dispatch({ type: fetch });
  const fetchFunc = async () => {
    await fetchProjects();
    await firestore
      .doc(`projects/${key}`)
      .collection(collection)
      .onSnapshot((snapshot: firebase.firestore.QuerySnapshot) => {
        const dataFromSnapshot = snapshot.docs.map(documentsCollection);
        dispatch({ type: state, payload: dataFromSnapshot });
      });
  };
  return fetchFunc();
};
