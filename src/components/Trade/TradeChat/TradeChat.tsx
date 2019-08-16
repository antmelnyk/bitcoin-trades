import React, { useEffect } from 'react';
import { IProps } from './types';

import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import Spinner from '../../Spinner';

const TradeChat: React.FC<IProps> = (props: IProps) => {

  const { tradingWith, paymentMethod, hash, chatId } = props.trade;
  
  useEffect(() => {
    props.actions.fetchChat(chatId);
  }, []);

  function handleTradeDeleting() {
    props.actions.deleteTrade(hash);
  }

  return (
    <div styleName='trade-chat'>

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

      <div styleName='messages'>

        <Spinner isSpinning={props.isFetching} />

        {props.messages.map(message =>
          <ChatMessage messageId={message.id} key={message.id} />
        )}
        
      </div>

      <ChatInput />
    </div>
  )
  
}

export default TradeChat
