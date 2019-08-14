import React from 'react';
import { IProps } from './types';

const TradeChat: React.FC<IProps> = (props: IProps) => {

  const { tradingWith, paymentMethod, isFetching, messages } = props;
  
  const header = (
    <div>
      Header
    </div>
  );

  return (    
    <div>
      {header}

      {messages.map(message =>
        <div key={message.id}>{message.text}</div>
      )}
    </div>
  )
  
}

export default TradeChat
