export interface User {
  name: string;
  email: string;
  type: string;
  uid: string;
  photoURL: string;
  createdAt?: {
    seconds: number;
    nanoseconds: number;
  };
}

export interface Member {
  id: string;
  user: User;
}

export interface Announcement extends Member {
  type: string;
  content: string;
}

export interface Backlog extends Announcement {
  name: string;
}

export interface Sprint extends Announcement {
  name: string;
  days: string;
}

export interface Project extends Member {
  key: string;
  projectName: string;
}

export interface InitState {
  projectKey: ProjectKey;
  projectId: ProjectId;
  currentUser: CurrentUser;
  team: Team;
  announcements: Announcements;
  backlog: Backlogs;
  sprints: Sprints;
  projects: Projects;
}
export interface Action {
  type: string;
  payload: [];
}

export type Team = Member[];
export type Announcements = Announcement[];
export type Backlogs = Backlog[];
export type Sprints = Sprint[];
export type ProjectKey = string | null;
export type ProjectId = string | null;
export type CurrentUser = User;
export type Projects = Project[];
export type DocumentFromCollection = Backlog | Sprint | Member | Announcement;
export type Image = Blob | Uint8Array | ArrayBuffer | null;
export type Collection = Backlogs | Sprints | Team | Announcements;
export type InputEvent = React.ChangeEvent<HTMLInputElement>;
