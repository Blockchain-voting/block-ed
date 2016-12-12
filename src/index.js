import React    from 'react';
import ReactDOM from 'react-dom';
import App      from './components/App.jsx';
import Login    from './components/Login/Login';
import Profile  from './components/Profile/Profile';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// mount our App at #container
ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Login}/>
        <Route path="/profile" component={Profile} />
      </Route>
    </Router>
  ), document.querySelector('#root-container'));
