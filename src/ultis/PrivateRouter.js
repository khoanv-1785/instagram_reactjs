import { Redirect, Route } from 'react-router-dom';
import React from 'react';
import {
    LOGIN
} from '../constants/route'

export const PrivateRouter = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('authenticationToken') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: LOGIN,
            state: { from: props.location },
          }}
        />
      )
    }
  />
);