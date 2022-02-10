import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import indexRoutes from './routes'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {indexRoutes.map(
            (prop, key) => {
              return (
                <Route
                  path={prop.path}
                  key={key}
                  exact
                  component={prop.component}
                />
              )
              // if (prop.redirect) {
              //   return (
              //     <Route
              //       path={prop.path}
              //       component={() => {
              //         window.location.href = prop.redirect
              //         return null
              //       }}
              //     />
              //   )
              // }
              // return (
              //   <Route
              //     path={prop.path}
              //     key={key}
              //     exact
              //     component={prop.component}
              //   />
              // )
            }
            // <Route path={prop.path} key={key}  component={prop.component} {...prop} />
          )}
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes
