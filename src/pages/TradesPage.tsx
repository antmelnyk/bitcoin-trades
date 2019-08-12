import React from 'react';

import TradesList from '../components/TradesList'
import TradePanel from '../components/TradePanel'
import { IProps as ITradesList } from '../components/TradesList/types';
import { IProps as ITradePanel } from '../components/TradePanel/types';

type ITradesPage = ITradePanel | ITradesList

const TradesPage = (props: ITradesPage) => {
  return (
    <div className='page'>
      <TradesList {...props} />
      <TradePanel {...props} />
    </div>
  )
}

export default TradesPage
