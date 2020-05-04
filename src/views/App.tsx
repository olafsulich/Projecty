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
import JoinProject from './JoinToProject';
import NewProject from './StartNewProject';
import Projects from './Projects';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Main from './Home';
import NotFoundPage from '../components/organisms/404';
import { routes } from '../routes/index';

const App: React.FC = () => {
  const {
    signIn,
    signUp,
    joinProject,
    startProject,
    projects,
    team,
    memberDetails,
    announcements,
    announcementsDetails,
    statistics,
    backlog,
    backlogDetails,
    sprints,
    sprintDetails,
    selectRole,
    account,
  } = routes;
  return (
    <Layout>
      <Router>
        <SignIn path={signIn} />
        <SignUp path={signUp} />
        <Main path="/" />
        <JoinProject path={joinProject} />
        <NewProject path={startProject} />
        <Projects path={projects} />
        <Team path={team} />
        <MemberDetails path={memberDetails} />
        <Announcements path={announcements} />
        <AnnouncementsDetails path={announcementsDetails} />
        <Statistics path={statistics} />
        <Backlog path={backlog} />
        <BacklogDetail path={backlogDetails} />
        <Sprints path={sprints} />
        <SprintDetail path={sprintDetails} />
        <SelectRole path={selectRole} />
        <Account path={account} />
        <NotFoundPage default />
      </Router>
    </Layout>
  );
};

export default App;
