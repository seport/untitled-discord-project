import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import MessageInput from './MessageInput';
import Party from './Party';
import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={MessageInput} />
    <Route exact path="/party" component={Party} />
  </Switch>
);

export default App;
