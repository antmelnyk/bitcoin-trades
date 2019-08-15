import React, { useEffect } from 'react';
import { IProps } from './types';

const TradeChat: React.FC<IProps> = (props: IProps) => {

  const { tradingWith, paymentMethod, hash, chatId } = props.trade;
  
  useEffect(() => {
    props.actions.fetchChat(chatId);
  }, []);

  function handleTradeDeleting() {
    props.actions.deleteTrade(hash);
  }

  const header = (
    <div styleName='chat-header'>
      <button onClick={handleTradeDeleting} styleName='action-delete-trade'></button>
      <div styleName='payment-method'>
        {paymentMethod}
      </div>
      <div styleName='trading-with'>
        <span styleName='trading-with-login'>{tradingWith.login}</span>
        <span styleName='reputation-positive'>+{tradingWith.positiveReputation}</span>
        <span>/</span>
        <span styleName='reputation-negative'>-{tradingWith.negativeReputation}</span>
      </div>
    </div>
  );

  return (    
    <div styleName='trade-chat'>
      {header}

      {props.messages.map(message =>
        <div key={message.id}>{message.text}</div>
      )}
    </div>
  )
  
}

export default TradeChat
