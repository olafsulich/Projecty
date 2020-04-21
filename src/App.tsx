import React from 'react';
import { RouteComponentProps } from '@reach/router';

type Props = RouteComponentProps;

const Main: React.FC<Props> = () => {
  return (
    <div>
      <h1>Main Page</h1>
    </div>
  );
};

export default Main;
