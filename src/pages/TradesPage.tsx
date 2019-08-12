import React from 'react';

import TradePanel from '../components/TradePanel'
import { IProps } from '../components/TradePanel/types';

const TradesPage = (props: IProps) => {
  return (
    <div className='trades-page'>
      <TradePanel {...props} />
    </div>
  )
}

export default TradesPage
