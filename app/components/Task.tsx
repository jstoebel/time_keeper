import * as React from 'react';

interface TaskProps {
  key: number,
  id: number,
  name: string,
  description: string,
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