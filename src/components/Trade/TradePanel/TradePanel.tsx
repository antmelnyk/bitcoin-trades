import React from 'react';
import { IProps } from './types';

const TradePanel: React.FC<IProps> = (props: IProps) => {  
  return (
    <div styleName='trade-info'>
      <div styleName='description'>
        You are trading with {props.trade.tradingWith.login}
      </div>
      <div styleName='time'>

      </div>
    </div>
  )
}

export default TradePanel
