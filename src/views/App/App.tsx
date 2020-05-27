import React from 'react';
import { Router } from '@reach/router';
import Layout from '../../Layout/Layout';
import Team from '../../components/organisms/Team/Team';
import Announcements from '../../components/organisms/Announcements/Announcements';
import Statistics from '../../components/organisms/Statistics/Statistics';
import Backlog from '../../components/organisms/Backlog/Backlog';
import Sprints from '../../components/organisms/Sprints/Sprints';
import SelectRole from '../../components/organisms/SelectRole/SelectRole';
import MemberDetails from '../../components/organisms/MemberDetails/MemberDetails';
import AnnouncementsDetails from '../../components/organisms/AnnouncementsDetails/AnnouncementsDetails';
import BacklogDetail from '../../components/organisms/BacklogDetails/BacklogDetails';
import SprintDetail from '../../components/organisms/SprintDetails/SprintDetails';
import Account from '../../components/organisms/Account/Account';
import JoinProject from '../JoinToProject/JoinToProject';
import NewProject from '../StartNewProject/StartNewProject';
import Projects from '../Projects/Projects';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import Main from '../Home/Home';
import NotFoundPage from '../404/404';
import { routes } from '../../routes/index';
import PrivateRoute from '../../components/atoms/PrivateRoute/PrivateRoute';

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
        <PrivateRoute as={JoinProject} path={joinProject} />
        <PrivateRoute as={NewProject} path={startProject} />
        <PrivateRoute as={Projects} path={projects} />
        <PrivateRoute as={Team} path={team} />
        <PrivateRoute as={MemberDetails} path={memberDetails} />
        <PrivateRoute as={Announcements} path={announcements} />
        <PrivateRoute as={AnnouncementsDetails} path={announcementsDetails} />
        <PrivateRoute as={Statistics} path={statistics} />
        <PrivateRoute as={Backlog} path={backlog} />
        <PrivateRoute as={BacklogDetail} path={backlogDetails} />
        <PrivateRoute as={Sprints} path={sprints} />
        <PrivateRoute as={SprintDetail} path={sprintDetails} />
        <PrivateRoute as={SelectRole} path={selectRole} />
        <PrivateRoute as={Account} path={account} />
        <NotFoundPage default />
        <SignIn path={signIn} />
        <SignUp path={signUp} />
        <Main path="/" />
      </Router>
    </Layout>
  );
};

export default App;
