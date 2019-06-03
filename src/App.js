import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HOME, LOGIN, REGISTER, PROFILE } from './constants/route'
import Home from './view/Home'
import SignInPage from './view/SignInPage'
import MainLayout from './components/MainLayout'
import PageNotFound from './components/PageNotFound'
import SignUpPage from './view/SignUpPage';
import Profile from './view/Profile'
import configureStore from './store/index'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'

const store = configureStore()
const history = createHistory()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <MainLayout />
          <Switch>
            <Route exact={true} path={HOME} component={Home} />
            <Route exact={true} path={LOGIN} component={SignInPage} />
            <Route exact={true} path={REGISTER} component={SignUpPage} />
            <Route exact={true} path={PROFILE} component={Profile} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
export default App;
