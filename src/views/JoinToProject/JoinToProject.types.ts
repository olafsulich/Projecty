import { ChangeEvent } from 'react';
import { RouteComponentProps } from '@reach/router';

export type Props = RouteComponentProps;
export type ChangeInputValue = ChangeEvent<HTMLInputElement>;
export enum ErrorMessages {
  WRONG_KEY = 'Please check your project key',
  NO_KEY = 'Key is required',
}
