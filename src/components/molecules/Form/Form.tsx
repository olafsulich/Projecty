import React from 'react';
import Heading from '../../atoms/Heading/Heading.styles';
import Label from '../../atoms/Label/Label.styles';
import Input from '../../atoms/Input/Input.styles';
import Button from '../../atoms/Button/Button.styles';
import LabelInputWrapper from '../../atoms/LabelInputWrapper/LabelInputWrapper.styles';
import { FormContainer, FormHeadingWrapper, FormWrapper, ButtonWrapper, Info, InfoButton } from './Form.styles';
import { Props } from './Form.types';

const Form: React.FC<Props> = ({ signup, newProject }) => {
  return (
    <FormContainer>
      <FormHeadingWrapper>
        {newProject ? (
          <Heading formHeading>Start a new project</Heading>
        ) : (
          <Heading formHeading>{signup ? 'Sign up to Projecty' : 'Sign in to Projecty'}</Heading>
        )}
        <FormWrapper>
          {signup ? (
            <LabelInputWrapper>
              <Label>Full Name</Label>
              <Input signup={signup} />
            </LabelInputWrapper>
          ) : null}
          {newProject ? (
            <>
              <LabelInputWrapper>
                <Label>Name</Label>
                <Input newProject />
              </LabelInputWrapper>
              <LabelInputWrapper>
                <Label>Key</Label>
                <Input newProject />
              </LabelInputWrapper>
            </>
          ) : (
            <>
              <LabelInputWrapper>
                <Label>Email Adress</Label>
                <Input signup={signup} />
              </LabelInputWrapper>
              <LabelInputWrapper>
                <Label>Password</Label>
                {signup ? <Input placeholder="6+ characters" signup={signup} /> : <Input signup={signup} />}
              </LabelInputWrapper>
            </>
          )}

          <ButtonWrapper>
            {newProject ? (
              <Button color="pink" type="submit">
                Add
              </Button>
            ) : (
              <Button color={signup ? 'green' : 'yellow'} type="submit">
                {signup ? 'Sign up' : 'Sign in'}
              </Button>
            )}

            <Info>
              Haven't got account?
              <InfoButton to={signup ? '/sign-in' : '/sign-up'} signup={signup}>
                {signup ? 'Sign in' : 'Sign up'}
              </InfoButton>
            </Info>
          </ButtonWrapper>
        </FormWrapper>
      </FormHeadingWrapper>
    </FormContainer>
  );
};

export default Form;
