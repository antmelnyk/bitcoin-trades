import React, { FunctionComponent } from 'react';
import { IProps } from './types';

import CSSModules from 'react-css-modules';
import styles from './TradeItem.scss';

const TradeItem: FunctionComponent<IProps> = (props: IProps) => {

  const { tradingWith, tradeStatus, paymentMethod, currencyAmount, 
    currency, cryptocurrencyAmount, cryptocurrency, paidStatus, chatNotification } = props.trade;
    
  return (
    <div styleName='trade-item'>
      <div styleName={`trade-chat-notification-${chatNotification ? 'unread' : 'read'}`}>
      </div>
      <div styleName='trade-info'>
        <div styleName='trading-with-status'>
          <span styleName='user-login'>{tradingWith.login}</span>
          <span styleName='user-status'>{tradeStatus}</span>
        </div>
        <div styleName='payment-method'>
          {paymentMethod}
        </div>
        <div styleName='money-values'>
          <span styleName='currency'>
            {currencyAmount} ({currency})
          </span>
          <span>
            {cryptocurrencyAmount} ({cryptocurrency})
          </span>
        </div>
      </div>
      <div styleName='trade-status'>
        <div styleName='trading-with-avatar'>
          {tradingWith.avatar}
        </div>
        <div styleName={`paid-status-${paidStatus ? 'paid' : 'not-paid'}`}>
          {paidStatus ? 'Paid': 'Not paid'}
        </div>
      </div>
    </div>
  )
}

export default CSSModules(TradeItem, styles)
