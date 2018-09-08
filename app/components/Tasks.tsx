import * as React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Task from './Task'

const Tasks = () => (
  <Query
    query={gql`
      {
        allTasks{
          id
          name
          description
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>loading</p>;
      if (error) return <p>error!</p>
      console.log(data);
      return data.allTasks.map((task: React.SFC, idx: number) => (<Task data={task} key={idx}/>))
    }}
  </Query>
);

export default Tasks;
