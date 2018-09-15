import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import Tasks from '../components/Tasks';
import NewTask from '../components/NewTask';

export class HomePage extends React.Component<RouteComponentProps<any>, void> {
  render() {
    return (
      <div>
        <NewTask/>
        <Tasks/>
      </div>
    );
  }
}

export default (HomePage as any as React.StatelessComponent<RouteComponentProps<any>>);
