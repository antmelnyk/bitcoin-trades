import React, { FunctionComponent } from 'react';
import { IProps } from './types';

const TradePanel: FunctionComponent<IProps> = (props: IProps) => {  
  if (!!props.trade) {
    return (
      <div styleName='trade-info'>
        <div styleName='description'>
          You are trading with {props.trade.tradingWith}
        </div>
        <div styleName='time'>

        </div>
      </div>
    )
  } else {
    return (
      <div styleName='select-trade'>
        Please select trade on the list
      </div>
    )
  }
}

export default TradePanel
