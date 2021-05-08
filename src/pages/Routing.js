import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Path, linking } from '@store';
import WorkPage from './WorkPage';
import AboutPage from './AboutPage';
import LinkingPage from './LinkingPage';

function Routing() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path={Path.work.ROOT} component={WorkPage} />
        <Route exact path={Path.ABOUT} component={AboutPage} />
        {linking.map((item) => (
          <Route
            exact
            key={item.path}
            path={item.path}
            render={({ location }) => <LinkingPage location={location} links={item.links} />}
          />
        ))}
      </Switch>
    </HashRouter>
  );
}

export default Routing;
