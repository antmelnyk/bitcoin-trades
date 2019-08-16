import React, { useEffect } from 'react';
import { IProps } from './types';

import TradeItem from './TradeItem';
import Spinner from '../Spinner';

const TradesList: React.FC<IProps> = (props: IProps) => {

  useEffect(() => {    
    props.actions.fetchTrades();
  }, []);

  if (props.list.length > 0) {
    return (
      <div styleName='trades-list'>
        {props.list.map(trade => <TradeItem trade={trade} key={trade.hash} /> )}
      </div>
    )
  }
  
  return (
    <div styleName='trades-list'>
      <div styleName='trades-fetching'>
        <Spinner isSpinning={props.isFetching} />
      </div>
    </div>
  )
}

export default TradesList
