import React from 'react';
import Layout from '../../Layout/Layout';
import Navigation from '../../components/molecules/Navigation/Navigation';
import { Wrapper, Container, Morph, Card } from './CardDetails.styles';

const CardDetailsTemplate: React.FC = ({ children }) => (
  <Layout>
    <Container>
      <Navigation />
      <Morph />
      <Wrapper>
        <Card>{children}</Card>
      </Wrapper>
    </Container>
  </Layout>
);

export default CardDetailsTemplate;
