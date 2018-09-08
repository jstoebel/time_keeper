import * as React from 'react';

interface TaskProps {
  data: any
}

const Task: React.SFC<TaskProps> = (props) => {
  return <h1>I am a task</h1>;
}

export default Task