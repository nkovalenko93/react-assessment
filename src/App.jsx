import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from '@components/Nav';
import TaskOne from '@components/taskone/TaskOne';
import TaskTwo from '@components/tasktwo/TaskTwo';
import TaskTwoDemo from '@components/tasktwo/TaskTwoDemo';

const App = () => (
  <Router>
    <Nav />
    <Switch>
      <Route
        path="/"
        exact
        component={TaskOne}
      />
      <Route
        path="/task-two"
        component={TaskTwo}
      />
      <Route
        path="/task-two-demo"
        component={TaskTwoDemo}
      />
    </Switch>
  </Router>
);

export default App;
