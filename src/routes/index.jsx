import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import ProtectedRoute from './protectedRoute'
import indexRoutes from './routes'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return prop.isWrapp ? (
              <ProtectedRoute path={prop.path} key={key} component={prop.component} />
            ) : (
              <Route path={prop.path} key={key} component={prop.component} />
            )
          })}
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes
