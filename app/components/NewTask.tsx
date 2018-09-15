import * as React from 'react';
import { Mutation } from 'react-apollo';
import ADD_TASK from '../graphql/mutations/newTask';
import ALL_TASKS from '../graphql/queries/allTasks';
// import gql from 'graphql-tag';

// const bsQuery = gql`
//   mutation createInterval {
//     createInterval(name: "whatever", description: "nah") {
//       id
//     }
//   }
// `

interface PropsI {}

interface StateI { name: string, description: string}

export class NewTask extends React.Component<PropsI, StateI> {

  state = {
    name: 'name string',
    description: 'description string'
  }
  constructor(props: any) {
    super(props)
  }

  handleFormSubmit(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();
    console.log(this.state);
  }

  public render() {
    const {name, description} = this.state;
    console.log('render!');
    console.log(name);
    console.log(description);
    
    
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
          <div>{this.state.name}</div>
          <div>{this.state.description}</div>
          <Mutation 
            mutation={ADD_TASK}
            variables={{name, description}}
            update={(cache, { data: { createTask } }) => {
              console.log(cache.readQuery({ query: ALL_TASKS }));
              
              // const allTasks = cache.readQuery({ query: ALL_TASKS }).allTasks;

              // if (cacheResults && cacheResults.allTasks) {
              //   return;
              // }


              // const allTasks = cache.readQuery({ query: ALL_TASKS }).allTasks;
              // cache.writeQuery({
              //   query: ALL_TASKS,
              //   data: { todos: allTasks.concat([allTasks]) }
              // });
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
