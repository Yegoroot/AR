import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'

import { routerMiddleware } from 'connected-react-router'
import history from '../history'
import createSagaMiddleware from 'redux-saga'

// import { saga } from '../ducks/people'

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose

const sagaMiddleware = createSagaMiddleware()
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history), logger))

const store = createStore(reducer, enhancer)

// sagaMiddleware.run(saga)

window.store = store // для дебагга
export default store
