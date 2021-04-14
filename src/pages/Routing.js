import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Work from './Work';
import WorkPreview from './WorkPreview';
import About from './About';

const history = createBrowserHistory();

function Routing() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Work} />
        <Route exact path='/work-preview' component={WorkPreview} />
        <Route exact path='/about' component={About} />
      </Switch>
    </Router>
  );
}

export default Routing;
