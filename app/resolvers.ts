import gql from 'graphql-tag';

export const defaults = {

}

export const resolvers = {
  Mutation: {
    toggleManualEntry: (_: any, args: any, context: any, info: any) => {
      console.log(context);
      
      const {cache, getCacheKey} = context;

      // console.log('args are');
      // console.log(args);

      // console.log('context is');
      // console.log(context);

      // console.log('info is');
      // console.log(info);

      const id = getCacheKey({ __typename: '__ClientData', id: args.id })
      console.log('id');
      console.log(id);
      
      const fragment = gql`
        fragment manualEntryOpen on Task {
          manualEntryOpen
        }
      `
      const task = cache.readFragment({fragment, id})
      console.log('task from the cache:');
      console.log(task);
      
      const data = {...task, manualEntryOpen: !task.manualEntryOpen}
      cache.writeData({id, data})
      return null
    }
  },
};
