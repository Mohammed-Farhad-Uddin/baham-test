import React from 'react';
import CustomerFrom from './Component/CustomerFrom';
import LoginForm from './Component/LoginForm';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Component/Home';

function App() {


  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/loginForm" component={LoginForm} />
        <Route exact path="/customerForm" component={CustomerFrom} />
      </Switch>
    </Router>
  );
}

export default App;


