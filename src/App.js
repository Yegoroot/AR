import { hot } from "react-hot-loader/root";
import React from "react";

import { Helmet } from "react-helmet";
import Routes from "./routes";

const App = () => (
  <>
    <Helmet
      titleTemplate="%s - Мединский Курс"
      defaultTitle="Изучение арабского языка по Мединскому Курсу - في منامي"
    >
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Справочник грамматики арабского языка основанного на Мединском курсе"
      />
    </Helmet>
    <Routes />
  </>
);

/**
 *  КОГДА БУДЕШЬ ДОБАВЛЯТЬ connect-router то удали BrowserRouter в <Routes />
 */
// import React from 'react'
// import React, { Component } from 'react'
// import store from './redux'
// import { Provider } from 'react-redux'
// import { ConnectedRouter } from 'connected-react-router'
// import history from './history'

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

export default hot(App);
// export default App;
