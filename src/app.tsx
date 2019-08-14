import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { store } from './store/configureStore';

import TradesPage from './pages/TradesPage/TradesPage';

import '../assets/global.scss';

const App = () => (
  <Provider store={store}>
    <Router>
      <Route path={`/trades/`} component={TradesPage} />
    </Router>
  </Provider>
)

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
