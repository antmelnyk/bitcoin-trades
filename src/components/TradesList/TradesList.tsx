import React, { useEffect } from 'react';
import { IProps } from './types';

import TradeItem from './TradeItem';

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
    </div>
  )
}

export default TradesList
