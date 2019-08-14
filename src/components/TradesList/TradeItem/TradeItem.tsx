import React from 'react';
import { Link } from 'react-router-dom';
import { IProps } from './types';

import CSSModules from 'react-css-modules';
import styles from './TradeItem.scss';

const TradeItem: React.FC<IProps> = (props: IProps) => {

  const { tradingWith, tradeStatus, paymentMethod, currencyAmount, 
    currency, cryptocurrencyAmount, cryptocurrency, paidStatus, chatNotification, hash } = props.trade;
    
  return (
    <Link to={`/trades/${hash}`} styleName='link'>
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
              {currencyAmount} {currency}
            </span>
            <span>
              ({cryptocurrencyAmount} {cryptocurrency})
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
    </Link>
  )
}

export default CSSModules(TradeItem, styles)
