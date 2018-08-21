import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

export class HomePage extends React.Component<RouteComponentProps<any>, void> {
  render() {
    return (
      <div>
        <div>hello world</div>
        <Link to="/other">to other</Link>
      </div>
    );
  }
}

export default (HomePage as any as React.StatelessComponent<RouteComponentProps<any>>);
