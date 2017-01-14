import React    from 'react';
import ReactDOM from 'react-dom';
import App      from './components/App.jsx';
import Login    from './components/Login/Login';
import Profile  from './components/Profile/Profile';
import Chain  from './components/Chain/Chain';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

/* TODO list
* 1 - add visible back button
* 2 - fix Signup/Login using same public key for everyone
* 3 - implement loading symbol for signup
* 4 - render vote count on page
* 5 - on vote display the verification process
* 6 - update styling on blocks
    - shorten hashes to be appreviated
    - try out two columns of hashes and value to keep blocks short
* 7 - update color scheme for the whole site
* 8 - change blocks to have them display in reverse order (active -> 1)
*/

// mount our App at #container
ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Login}/>
        <Route path="/profile" component={Profile} />
        <Route path="/blockchain/:id" component={Chain} />
      </Route>
    </Router>
  ), document.querySelector('#root-container'));
