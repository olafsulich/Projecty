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

export interface Announcement {
  id: string;
  user: User;
  type: string;
  content: string;
}

export interface Backlog {
  id: string;
  name: string;
  type: string;
  content: string;
  user: {
    name: string;
    uid?: string;
  };
}

export interface Sprint {
  id: string;
  name: string;
  type: string;
  content: string;
  days: string;
  user: {
    name: string;
    uid?: string;
  };
}

export interface Project {
  id: string;
  user: User;
  key: string;
  projectName: string;
}

export type Team = Member[] | null;
export type Announcements = Announcement[] | null;
export type Backlogs = Backlog[] | null;
export type Sprints = Sprint[] | null;
export type ProjectKey = string | null;
export type ProjectId = string | null;
export type CurrentUser = User | null;
export type Projects = Project[] | null;
export type DocumentFromCollection = Backlog | Sprint | Member | Announcement;
export type Image = Blob | Uint8Array | ArrayBuffer | null;
export type Collection = Backlogs | Sprints | Team | Announcements;
export type InputEvent = React.ChangeEvent<HTMLInputElement>;
