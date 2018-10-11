import gql from 'graphql-tag';

export default gql`
  mutation ToggleManualEntry($taskId: Int!) {
    toggleManualEntry(taskId: $taskId) @client
  }
`;