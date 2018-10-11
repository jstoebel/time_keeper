import * as React from 'react';
import { Query } from "react-apollo";
import allTasks from '../graphql/queries/allTasks'

import Task from './Task'


const styles = {
  display: 'flex' as 'flex',
  flexWrap: 'wrap' as 'wrap',
}

const Tasks = () => (
  
  <Query
    query={allTasks}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>loading</p>;
      if (error) return <p>error!</p>
      return <div style={styles}>
        {
          data.allTasks.map(
            (
              task: { id: number, name: string, description: string }, idx: number
            ) => (<Task key={idx} {...task} />))
        }
      </div>
    }}
  </Query>
);

export default Tasks;
