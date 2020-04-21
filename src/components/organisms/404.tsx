import * as React from 'react';
import { RouteComponentProps } from '@reach/router';

type Props = RouteComponentProps;

const NotFoundPage: React.FC<Props> = () => <div>this is error page</div>;

export default NotFoundPage;
