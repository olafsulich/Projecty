import React from 'react';
import { Router } from '@reach/router';
import Layout from '../Layout/Layout';
import Team from '../components/organisms/team';
import Announcements from '../components/organisms/announcements';
import Statistics from '../components/organisms/statistics';
import Backlog from '../components/organisms/backlog';
import Sprints from '../components/organisms/sprints';
import SelectRole from '../components/organisms/select-role';
import MemberDetails from '../components/organisms/memberDetails';
import AnnouncementsDetails from '../components/organisms/announcementsDetails';
import BacklogDetail from '../components/organisms/backlogDetail';
import SprintDetail from '../components/organisms/sprintDetail';
import Account from '../components/organisms/account';
import JoinProject from './join-to-project';
import NewProject from './start-new-project';
import Projects from './projects';
import SignIn from './sign-in';
import SignUp from './sign-up';
import Main from '../App';

const App: React.FC = () => {
  return (
    <Layout>
      <Router>
        <Main path="/" />
        <SignIn path="/sign-in" />
        <SignUp path="/sign-up" />
        <JoinProject path="/join-to-project" />
        <NewProject path="/start-new-project" />
        <Projects path="/projects" />
        <Team path="project/:id/team" />
        <MemberDetails path="project/:id/team/:id" />
        <Announcements path="project/:id/announcements" />
        <AnnouncementsDetails path="project/:id/announcements/:id" />
        <Statistics path="project/:id/statistics" />
        <Backlog path="project/:id/backlog" />
        <BacklogDetail path="project/:id/backlog/:id" />
        <Sprints path="project/:id/sprints" />
        <SprintDetail path="project/:id/sprints/:id" />
        <SelectRole path="project/:id/select-role" />
        <Account path="project/:id/account" />
      </Router>
    </Layout>
  );
};

export default App;
