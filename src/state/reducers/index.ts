import { types } from '../enums';
import { InitState, Action } from '../../types';

const {
  SET_USER,
  CURRENT_USER,
  PROJECT_KEY,
  PROJECTS,
  FETCH_PROJECTS,
  TEAM,
  FETCH_TEAM,
  FETCH_ANNOUNCEMENTS,
  ANNOUNCEMENTS,
  FETCH_BACKLOG,
  BACKLOG,
  FETCH_SPRINTS,
  SPRINTS,
  PROJECT_ID,
  SET_PROJECT_ID,
} = types;

const initialState: InitState = {
  projectKey: '',
  projectId: '',
  currentUser: {
    email: '',
    type: '',
    name: '',
    uid: '',
    photoURL: '',
  },
  team: [],
  announcements: [],
  backlog: [],
  sprints: [],
  projects: [],
};

const rootReducer = (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case CURRENT_USER:
      return {
        ...state,
        currentUser: { ...payload },
      };
    case SET_USER:
      return {
        ...state,
      };
    case PROJECT_KEY:
      return {
        ...state,
        projectKey: payload,
      };
    case PROJECTS:
      return {
        ...state,
        projects: payload,
      };
    case FETCH_PROJECTS:
      return {
        ...state,
      };
    case TEAM:
      return {
        ...state,
        team: payload,
      };
    case FETCH_TEAM:
      return {
        ...state,
      };
    case ANNOUNCEMENTS:
      return {
        ...state,
        announcements: payload,
      };
    case FETCH_ANNOUNCEMENTS:
      return {
        ...state,
      };
    case BACKLOG:
      return {
        ...state,
        backlog: payload,
      };
    case FETCH_BACKLOG:
      return {
        ...state,
      };
    case SPRINTS:
      return {
        ...state,
        sprints: payload,
      };
    case FETCH_SPRINTS:
      return {
        ...state,
      };
    case PROJECT_ID:
      return {
        ...state,
        projectId: payload,
      };
    case SET_PROJECT_ID:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default rootReducer;
