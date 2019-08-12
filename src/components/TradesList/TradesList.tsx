import React, { useEffect, FunctionComponent } from 'react';
import { IProps } from './types';

import TradeItem from './TradeItem';
import Spinner from '../Spinner';

const TradesList: FunctionComponent<IProps> = (props: IProps) => {

  useEffect(() => {    
    props.fetchTrades();
  }, []);

  if (props.list.length > 0) {
    return (
      <div styleName='trades-list'>
        {props.list.map(trade => <TradeItem trade={trade} key={trade.id} /> )}
      </div>
    )
  }
  
  return (
    <div styleName='trades-list'>
      <Spinner isSpinning={props.isFetching} />
    </div>
  )
}

export default TradesList
