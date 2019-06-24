import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {
  HOME,
  LOGIN,
  REGISTER,
  PROFILE,
} from './constants/route'
import Home from './view/Home'
import SignInPage from './view/SignInPage'
import ProfilePage from './view/Profile'
import MainLayout from './components/MainLayout'
import PageNotFound from './components/PageNotFound'
import SignUpPage from './view/SignUpPage';
import configureStore from './store/index'
import { PrivateRouter } from './ultis/PrivateRouter'
import { Provider } from 'react-redux'
import CreateNewPostPage from './containers/creatPost/index'
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
            <Route path="/upload" component={CreateNewPostPage} />
            <PrivateRouter exact path={PROFILE} component={ProfilePage} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
export default App;
