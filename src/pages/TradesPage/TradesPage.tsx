import React from 'react';
import { BrowserRouter as Router, Route, RouteComponentProps } from 'react-router-dom';

import TradesList from '../../components/TradesList/';
import Trade from '../../components/Trade/';

import CSSModules from 'react-css-modules';
import styles from './TradesPage.scss';

const TradesPage: React.FC<RouteComponentProps<any>> = (props: RouteComponentProps<any>) => {
    
  return (
    <div className='page'>

      <TradesList />
      
      <Route exact path={props.match.path}
        render={() => (
          <div className={styles['no-trade-selected']}>
            Please select a trade
          </div>
        )}
      />

      <Route path='/trades/:tradeHash' component={Trade} />

    </div>
  )
}

export default (CSSModules(TradesPage, styles))
