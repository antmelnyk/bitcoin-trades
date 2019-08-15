import React, { useEffect } from 'react';
import { IProps } from './types';

import TradeChat from './TradeChat/';
import TradePanel from './TradePanel/';
import Spinner from '../Spinner';

const Trade: React.FC<IProps> = (props: IProps) => {

  useEffect(() => {
    props.actions.fetchTrade(props.match.params.tradeHash);
  }, [props.match.params.tradeHash]);

  if(props.trade) {
    return (
      <>
        <TradeChat 
          hash={props.trade.hash}
          paymentMethod={props.trade.paymentMethod}
          tradingWith={props.trade.tradingWith}
        />
        <TradePanel trade={props.trade} />
      </>
    )
  } else if (props.trade == null) {
    return (
      <div styleName='trade-is-fetching'>
        <Spinner isSpinning={true} />
      </div>
    )
  } else {
    return (
      <div styleName='trade-not-found'>
        No trade found
      </div>
    )
  }
  
}

export default Trade
