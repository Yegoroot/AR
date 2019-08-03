import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import indexRoutes from './routes'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {indexRoutes.map((prop, key) => (
            // <Route path={prop.path} key={key}  component={prop.component} {...prop} />
            <Route path={prop.path} key={key} exact component={prop.component} />
          ))}
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes
