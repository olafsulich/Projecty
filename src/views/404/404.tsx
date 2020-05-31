import React from 'react';
import { RouteComponentProps, navigate } from '@reach/router';
import FormTemplate from '../../templates/FormTemplate/FormTemplate';
import Button from '../../components/atoms/Button/Button.styles';
import { FormWrapper, FormHeadingWrapper, NotFoundHeading } from './404.styles';

const NotFoundPage: React.FC<RouteComponentProps> = () => (
  <FormTemplate>
    <FormWrapper>
      <FormHeadingWrapper>
        <NotFoundHeading>Something goes wrong</NotFoundHeading>
        <Button color="yellow" onClick={() => navigate(-1)}>
          go back
        </Button>
      </FormHeadingWrapper>
    </FormWrapper>
  </FormTemplate>
);

export default NotFoundPage;
