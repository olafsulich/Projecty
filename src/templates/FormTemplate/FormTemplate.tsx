import React from 'react';
import Layout from '../../Layout/Layout';
import HalfPage from '../../components/molecules/HalfPage/HalfPage';
import Logo from '../../components/atoms/Logo/Logo.styles';
import usePageWidth from '../../hooks/usePageWidth';
import { Wrapper, Container, LogoWrapper, ButtonSecondary } from './FormTemplate.styles';
import { Props } from './FormTemplate.types';

const FormTemplate: React.FC<Props> = ({ signUp, children }) => {
  const pageWidth = usePageWidth();
  return (
    <Layout>
      <Container>
        {pageWidth >= 950 ? <HalfPage signUp={signUp} /> : null}
        <Wrapper>
          {pageWidth >= 950 ? null : (
            <LogoWrapper to="/">
              <Logo signUp={signUp}>Projecty</Logo>
            </LogoWrapper>
          )}
          {pageWidth >= 950 ? (
            <ButtonSecondary to={signUp ? '/sign-in' : '/sign-up'} signUp={signUp}>
              {signUp ? 'Sign in' : 'Sign up'}
            </ButtonSecondary>
          ) : null}

          {children}
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default FormTemplate;
