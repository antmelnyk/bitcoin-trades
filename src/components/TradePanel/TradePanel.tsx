import React, { FunctionComponent } from 'react';
import { IProps } from './types';

const TradePanel: FunctionComponent<IProps> = (props: IProps) => {
  
  console.log(props);
  
  if (!!props.trade) {
    return (
      <div className='trade-info'>
        <div className='description'>
          You are trading with {props.trade.tradingWith}
        </div>
        <div className='time'>

        </div>
      </div>
    )
  } else {
    return (
      <div className='trade-info'>
        Please select trade on the list
      </div>
    )
  }
}

export default TradePanel;
