import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { Formik } from 'formik';
import * as yup from 'yup';
import FormTemplate from '../../templates/FormTemplate/FormTemplate';
import Heading from '../../components/atoms/Heading/Heading.styles';
import Label from '../../components/atoms/Label/Label.styles';
import Input from '../../components/atoms/Input/Input.styles';
import Button from '../../components/atoms/Button/Button.styles';
import LabelInputWrapper from '../../components/atoms/LabelInputWrapper/LabelInputWrapper.styles';
import ErrorMessage from '../../components/atoms/ErrorMessage/ErrorMessage.styles';
import { FormWrapper, FormHeadingWrapper, Form, ButtonWrapper, Info, InfoButton } from './SignIn.styles';
import { handleSignIn } from '../../api/signIn';

const SignUpSchema = yup.object().shape({
  password: yup
    .string()
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, 'Password should contain min. 6 characters and one number')
    .required('Password is required'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
});

const SignIn: React.FC<RouteComponentProps> = () => (
  <Formik
    initialValues={{ email: '', password: '' }}
    validationSchema={SignUpSchema}
    onSubmit={({ email, password }, { setErrors }) => {
      handleSignIn(email, password);
      setErrors({});
    }}
  >
    {({ values: { email, password }, handleChange, handleBlur, handleSubmit, errors, touched }) => {
      return (
        <FormTemplate>
          <FormWrapper>
            <FormHeadingWrapper>
              <Heading formHeading>Sign in to Projecty</Heading>
              <Form onSubmit={handleSubmit} noValidate>
                <LabelInputWrapper>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
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
                  {errors.email && touched.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                </LabelInputWrapper>
                <LabelInputWrapper>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
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
                  <Button color="yellow" type="submit">
                    Sign in
                  </Button>

                  <Info>
                    Haven't got account?
                    <InfoButton to="/sign-up">Sign up</InfoButton>
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

export default SignIn;
