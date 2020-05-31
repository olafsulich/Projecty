import React, { useState } from 'react';
import GridLayout from '../../Layout/GridLayout';
import Layout from '../../Layout/Layout';
import Navigation from '../../components/molecules/Navigation/Navigation';
import AddAnnouncement from '../../components/molecules/AddAnnouncement/AddAnnouncement';
import AddBacklog from '../../components/molecules/AddBacklog/AddBacklog';
import AddSprint from '../../components/molecules/AddSprint/AddSprint';
import EditProfile from '../../components/molecules/EditProfile/EditProfile';
import { Wrapper, Container, PageHeading, Morph, ButtonSecondary, Header } from './PageTemplate.styles';
import { Props } from './PageTemplate.types';

const PageTemplate: React.FC<Props> = ({ pageHeading, children }) => {
  const [isVisible, setVisibility] = useState<boolean>(false);
  const toggleVisibility = () => setVisibility(prevState => !prevState);

  const chooseModal = () => {
    switch (pageHeading) {
      case 'Announcements':
        return <>{isVisible && <AddAnnouncement isVisible={isVisible} toggleVisibility={toggleVisibility} />} </>;
      case 'Backlog':
        return <>{isVisible && <AddBacklog isVisible={isVisible} toggleVisibility={toggleVisibility} />} </>;
      case 'Sprints':
        return <>{isVisible && <AddSprint isVisible={isVisible} toggleVisibility={toggleVisibility} />} </>;
      case 'Account':
        return <>{isVisible && <EditProfile isVisible={isVisible} toggleVisibility={toggleVisibility} />} </>;
      default:
        return null;
    }
  };

  const isButtonVisible = () => {
    switch (pageHeading) {
      case 'Announcements':
        return (
          <>
            <ButtonSecondary pageHeading={pageHeading} onClick={toggleVisibility}>
              {isVisible ? 'Close' : 'Add new'}
            </ButtonSecondary>
          </>
        );
      case 'Backlog':
        return (
          <>
            <ButtonSecondary pageHeading={pageHeading} onClick={toggleVisibility}>
              {isVisible ? 'Close' : 'Add new'}
            </ButtonSecondary>
          </>
        );
      case 'Sprints':
        return (
          <>
            <ButtonSecondary pageHeading={pageHeading} onClick={toggleVisibility}>
              {isVisible ? 'Close' : 'Add new'}
            </ButtonSecondary>
          </>
        );
      case 'Team':
        return null;
      case 'Account':
        return (
          <>
            <ButtonSecondary pageHeading={pageHeading} onClick={toggleVisibility}>
              {isVisible ? 'Close' : 'Edit'}
            </ButtonSecondary>
          </>
        );
      default:
        return null;
    }
  };
  return (
    <Layout>
      <Container>
        <Navigation />
        <Morph />
        <Wrapper>
          <Header>
            <PageHeading formHeading>{pageHeading}</PageHeading>
            {isButtonVisible()}
          </Header>
          {pageHeading === 'Statistics' ? <GridLayout statistics>{children}</GridLayout> : <GridLayout>{children}</GridLayout>}
          {chooseModal()}
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default PageTemplate;
