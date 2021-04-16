import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Work from './Work';
import WorkPreview from './WorkPreview';
import About from './About';

function Routing() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Work} />
        <Route exact path='/work-preview' component={WorkPreview} />
        <Route exact path='/about' component={About} />
      </Switch>
    </HashRouter>
  );
}

export default Routing;
