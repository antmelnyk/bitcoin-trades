import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { store } from './store/configureStore';

import TradesPage from './pages/TradesPage';

import '../assets/global.scss';

const App = () => (
  <Provider store={store}>
    <Router>
      <Route exact path={`/`} component={TradesPage} />
      {/* <Route path={`/trades/:hash`} component={TradePanel} /> */}
    </Router>
  </Provider>
)

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
