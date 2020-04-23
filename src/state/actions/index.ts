import { auth, firestore } from '../../firebase/index';
import { createUserDoc } from '../../firebase/utils';
import { documentsCollection } from '../../utils/utils';
import { SET_USER, CURRENT_USER, SET_PROJECT_ID, PROJECT_ID, PROJECT_KEY, FETCH_PROJECTS, PROJECTS } from '../constants';
import { Projects, ProjectKey } from '../../types/index';

export const setCurrentUser = () => (dispatch: any) => {
  dispatch({ type: SET_USER });
  if (auth) {
    return auth.onAuthStateChanged(async user => {
      const authUser = await createUserDoc(user);
      dispatch({ type: CURRENT_USER, payload: { ...authUser } });
    });
  }
  return null;
};

export const getProjectID = (projects: Projects, key: ProjectKey) => (dispatch: any) => {
  dispatch({ type: SET_PROJECT_ID });

  const setProjectID = () => {
    if (projects) {
      const projectID = projects.filter((doc: { key: string }) => doc.key === key)[0].id;
      dispatch({ type: PROJECT_ID, payload: projectID });
      localStorage.setItem(PROJECT_ID, projectID);
    }
  };

  return setProjectID();
};

export const setProjectKey = (key: ProjectKey) => (dispatch: any) => {
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

export const fetchFactory = (key: ProjectKey, fetch: string, collection: string, state: string) => (dispatch: any) => {
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
