import { RouteComponentProps } from '@reach/router';

export interface Props {
  as: React.ComponentType<RouteComponentProps>;
  path: string;
}
