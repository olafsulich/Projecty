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

const rootReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case CURRENT_USER:
      return {
        ...state,
        currentUser: { ...action.payload },
      };
    case SET_USER:
      return {
        ...state,
      };
    case PROJECT_KEY:
      return {
        ...state,
        projectKey: action.payload,
      };
    case PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case FETCH_PROJECTS:
      return {
        ...state,
      };
    case TEAM:
      return {
        ...state,
        team: action.payload,
      };
    case FETCH_TEAM:
      return {
        ...state,
      };
    case ANNOUNCEMENTS:
      return {
        ...state,
        announcements: action.payload,
      };
    case FETCH_ANNOUNCEMENTS:
      return {
        ...state,
      };
    case BACKLOG:
      return {
        ...state,
        backlog: action.payload,
      };
    case FETCH_BACKLOG:
      return {
        ...state,
      };
    case SPRINTS:
      return {
        ...state,
        sprints: action.payload,
      };
    case FETCH_SPRINTS:
      return {
        ...state,
      };
    case PROJECT_ID:
      return {
        ...state,
        projectId: action.payload,
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
