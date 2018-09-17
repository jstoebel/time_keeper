import gql from 'graphql-tag';

export default gql`
  mutation CreateTaskMutation($name: String!, $description: String!){
    createTask(name: $name, description: $description) {
      id
      name
      description
    }
  }
`;