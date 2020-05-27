import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { Formik } from 'formik';
import FormTemplate from '../../templates/FormTemplate';
import Heading from '../../components/atoms/Heading/Heading.styles';
import Label from '../../components/atoms/Label/Label.styles';
import Input from '../../components/atoms/Input/Input.styles';
import Button from '../../components/atoms/Button/Button.styles';
import LabelInputWrapper from '../../components/atoms/LabelInputWrapper/LabelInputWrapper.styles';
import ErrorMessage from '../../components/atoms/ErrorMessage/ErrorMessage.styles';
import { FormWrapper, FormHeadingWrapper, Form, ButtonWrapper, Info, InfoButton } from './SignUp.styles';
import { handleSignUp } from '../../api/signUp';

const SignUp: React.FC<RouteComponentProps> = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '', name: '' }}
      validate={({ email, password, name }) => {
        const errors: Partial<{ email: string; password: string; name: string }> = {};
        if (!name) {
          errors.name = 'Name is required';
        } else if (!email) {
          errors.email = 'Email is required';
        } else if (!password) {
          errors.password = 'Password is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
          errors.email = 'Invalid email address';
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/i.test(password)) {
          errors.password = 'Password should contain min. 6 characters and one number';
        }
        return errors;
      }}
      onSubmit={({ email, password, name }) => handleSignUp(email, password, name)}
    >
      {({ values: { email, password, name }, handleChange, handleBlur, handleSubmit, errors }) => {
        return (
          <FormTemplate signUp>
            <FormWrapper>
              <FormHeadingWrapper>
                <Heading formHeading>Sign up to Projecty</Heading>
                <Form onSubmit={handleSubmit}>
                  <LabelInputWrapper>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      signup
                      id="name"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="name"
                      value={name}
                      aria-label="name"
                      aria-required="true"
                      aria-invalid={errors.name ? 'true' : 'false'}
                      autoComplete="new-password"
                    />
                    {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                  </LabelInputWrapper>

                  <LabelInputWrapper>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      signup
                      id="email"
                      type="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="email"
                      value={email}
                      aria-label="email"
                      aria-required="true"
                      aria-invalid={errors.email ? 'true' : 'false'}
                      autoComplete="new-password"
                    />
                    {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                  </LabelInputWrapper>
                  <LabelInputWrapper>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      type="password"
                      placeholder="6+ characters"
                      min="6"
                      signup
                      id="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="password"
                      value={password}
                      aria-label="password"
                      aria-required="true"
                      aria-invalid={errors.password ? 'true' : 'false'}
                      autoComplete="new-password"
                    />
                    {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
                  </LabelInputWrapper>

                  <ButtonWrapper>
                    <Button color="green" type="submit">
                      Sign up
                    </Button>
                    <Info>
                      Haven't got account?
                      <InfoButton to="/sign-in">Sign in</InfoButton>
                    </Info>
                  </ButtonWrapper>
                </Form>
              </FormHeadingWrapper>
            </FormWrapper>
          </FormTemplate>
        );
      }}
    </Formik>
  );
};
export default SignUp;
