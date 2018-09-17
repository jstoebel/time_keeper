import * as React from 'react';
import { Mutation } from 'react-apollo';
import ADD_TASK from '../graphql/mutations/newTask';
import ALL_TASKS from '../graphql/queries/allTasks';
import TaskI from '../interfaces/Task';

interface PropsI {}

interface StateI { name: string, description: string}

interface AllTasksI {
  allTasks: Array<TaskI>;
}

export class NewTask extends React.Component<PropsI, StateI> {

  state = {
    name: '',
    description: ''
  }
  constructor(props: any) {
    super(props)
  }

  handleFormSubmit(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();
  }

  public render() {
    const {name, description} = this.state;
    return (
      <div>
        <form>
          <div>
            <label>name</label>
            <input
              value={this.state.name}
              onChange={e => {this.setState({ name: e.target.value })}}
              type="text"
            />
          </div>

          <div>
            <label>description</label>
            <input
              value={this.state.description}
              onChange={e => { this.setState({ description: e.target.value }) }}
              type="text"
            />
          </div>
          <Mutation
            mutation={ADD_TASK}
            variables={{name, description}}
            update={(cache, { data: { createTask } }) => {
              const { allTasks } = cache.readQuery<AllTasksI>({ query: ALL_TASKS })!;
              cache.writeQuery({
                query: ALL_TASKS,
                data: { allTasks: allTasks.concat([createTask]) }
              });
            }}
          >
            {postMutation => <button onClick={() => {postMutation()}}>Submit</button>}
          </Mutation>
        </form>
      </div>
    )
  }
}

export default NewTask
