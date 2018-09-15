import * as React from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
// import NewTask from './NewTask';

const ADD_TASK = gql`
  mutation CreateTask($name: String!, $description: String!) {
    createTask(name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

const NewTaskQuery: React.SFC<{}> = () => {
  return (
    <Mutation mutation={ADD_TASK}>
      {(addTodo, { data }) => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              console.log(e);
              
            }}
          >
            <input
            />
            <button type="submit">Add Todo</button>
          </form>
        </div>
      )}
    </Mutation>
  )
}

export default NewTaskQuery;

// {
//   (createTask, { data }) => (
//     <div>
//       <form
//         onSubmit={e => {
//           e.preventDefault();
//           createTask({ variables: { type: input.value } });
//           input.value = "";
//         }}
//       >
//         <input
//           ref={node => {
//             input = node;
//           }}
//         />
//         <button type="submit">Add Todo</button>
//       </form>
//     </div>
//   )

// }