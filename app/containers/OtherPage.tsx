import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

export class OtherPage extends React.Component<RouteComponentProps<any>, void> {
  render() {
    return (
      <div>
        <div>hello from another world</div>
        <Link to="/">go home</Link>
      </div>
    );
  }
}

export default (OtherPage as any as React.StatelessComponent<RouteComponentProps<any>>);