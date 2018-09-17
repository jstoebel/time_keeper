import * as React from 'react';
import TaskI from '../interfaces/Task';

interface TaskProps extends TaskI {
  key: number,
}

const Task: React.SFC<TaskProps> = (props) => {
  return(
    <div>
      <h1>{props.name}</h1>
      <div>{props.description}</div>
    </div>
  )
}

export default Task