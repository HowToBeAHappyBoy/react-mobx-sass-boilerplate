import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, NotFoundPage } from 'pages';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default App;