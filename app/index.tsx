import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createHashHistory } from 'history';
import Root from './containers/Root';
import './app.global.scss';


// apolloClient
//   .query({
//     query: gql`
// {
// 	allTasks {
// 		id
// 		description
// 	}
// }
//     `
//   })
//   .then(result => console.log(result));

const history = createHashHistory();

render(
  <AppContainer>
    <Root history={history} />
  </AppContainer>,
  document.getElementById('root')
);

if ((module as any).hot) {
  (module as any).hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root').default;
    render(
      <AppContainer>
        <NextRoot history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
