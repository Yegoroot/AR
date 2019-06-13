// import React, { Component } from 'react'
import React from 'react'
/**
 *  КОГДА БУДЕШЬ ДОБАВЛЯТЬ connect-router то удали BrowserRouter в <Routes />
 */
// import store from './redux'
// import { Provider } from 'react-redux'
// import { ConnectedRouter } from 'connected-react-router'
// import history from './history'
import Routes from './routes'

const App = () => <Routes />

// class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <ConnectedRouter history={history}>
//           {/* почему то с этой обёрткой <div> не работает анимация на главной */}
//           {/* <div> */}
//           <Routes />
//           {/* </div> */}
//         </ConnectedRouter>
//       </Provider>
//     )
//   }
// }

export default App
