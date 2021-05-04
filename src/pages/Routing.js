import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Path } from '@store';
import WorkPage from './WorkPage';
import AboutPage from './AboutPage';

function Routing() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path={Path.WORK} component={WorkPage} />
        <Route exact path={Path.ABOUT} component={AboutPage} />
      </Switch>
    </HashRouter>
  );
}

export default Routing;
