import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HOME, LOGIN, REGISTER, PROFILE } from './constants/route'
import Home from './view/Home'
import SignInPage from './view/SignInPage'
import MainLayout from './components/MainLayout'
import PageNotFound from './components/PageNotFound'
import SignUpPage from './view/SignUpPage';

class App extends Component {
  render() {
    return (
      <Router>
        <MainLayout />
        <Switch>
          <Route  exaxt={true} path={HOME} component={Home} />
          <Route  exact={true} path={LOGIN} component={SignInPage} />
          <Route  path={REGISTER} component={SignUpPage} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}
export default App;
