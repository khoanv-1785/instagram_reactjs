import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {
  HOME,
  LOGIN,
  REGISTER,
  POST_LIST_OF_USER,
} from './constants/route'
import Home from './view/Home'
import SignInPage from './view/SignInPage'
import MainLayout from './components/MainLayout'
import PageNotFound from './components/PageNotFound'
import SignUpPage from './view/SignUpPage';
import PostListOfUser from './view/PostListOfUser'
import configureStore from './store/index'
import { PrivateRouter } from './ultis/PrivateRouter'
import { Provider } from 'react-redux'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <MainLayout />
          <Switch>
            <PrivateRouter exact={true} path={HOME} component={Home} />
            <Route exact={true} path={LOGIN} component={SignInPage} />
            <Route exact={true} path={REGISTER} component={SignUpPage} />
            <Route exact={true} path={POST_LIST_OF_USER} component={PostListOfUser} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
export default App;
