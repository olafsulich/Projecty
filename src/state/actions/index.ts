import { Dispatch } from 'redux';
import { auth, firestore } from '../../firebase/index';
import { createUserDoc } from '../../utils/createUserDoc';
import { documentsCollection } from '../../utils/documentsCollection';
import { types } from '../enums';
import { Projects, ProjectKey } from '../../types/index';

const { SET_USER, CURRENT_USER, SET_PROJECT_ID, PROJECT_ID, PROJECT_KEY, FETCH_PROJECTS, PROJECTS } = types;

export const setCurrentUser = () => (dispatch: Dispatch) => {
  dispatch({ type: SET_USER });
  if (auth) {
    return auth.onAuthStateChanged(async user => {
      const authUser = await createUserDoc(user);
      dispatch({ type: CURRENT_USER, payload: { ...authUser } });
    });
  }
  return null;
};

export const getProjectID = (projects: Projects, key: ProjectKey) => (dispatch: Dispatch) => {
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

export const setProjectKey = (key: string) => (dispatch: Dispatch) => {
  dispatch({ type: PROJECT_KEY, payload: key });
  localStorage.setItem(PROJECT_KEY, key);
};

export const fetchProjects = () => (dispatch: Dispatch) => {
  dispatch({ type: FETCH_PROJECTS });
  return firestore.collection('projects').onSnapshot((snapshot: firebase.firestore.QuerySnapshot) => {
    const dataFromSnapshot = snapshot.docs.map(documentsCollection);
    dispatch({ type: PROJECTS, payload: dataFromSnapshot });
  });
};

export const fetchFactory = (key: ProjectKey, fetch: string, state: string) => (dispatch: Dispatch) => {
  dispatch({ type: fetch });
  const fetchFunc = async () => {
    await fetchProjects();
    await firestore
      .doc(`projects/${key}`)
      .collection(state.toLowerCase())
      .onSnapshot((snapshot: firebase.firestore.QuerySnapshot) => {
        const dataFromSnapshot = snapshot.docs.map(documentsCollection);
        dispatch({ type: state, payload: dataFromSnapshot });
      });
  };
  return fetchFunc();
};
