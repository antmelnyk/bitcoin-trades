import React from 'react';
import moment from 'moment';

import { IProps } from './types';

import UserAvatar from '../../UserAvatar';

const TradePanel: React.FC<IProps> = (props: IProps) => { 

  const { tradingWith, currencyAmount, currency, cryptocurrencyAmount, 
    cryptocurrency, paidStatus, createdAt, hash } = props.trade;

  function handleBitcoinRelease() {
    props.actions.releaseBitcoin();
  }

  return (
    <div styleName='trade-info'>
      <div styleName='description'>
        You are trading with <span styleName='trading-with'>{tradingWith.login}</span>
      </div>
      <div styleName='time'>
        Started {moment(createdAt, "YYYYMMDD").fromNow()}
      </div>
      <button onClick={handleBitcoinRelease} styleName='action-release-cryptocurrency'>
        Release bitcoins
      </button>
      <div styleName='info-blocks'>
        <div styleName='block'>
          <div styleName='block-title'>
            <UserAvatar avatar={tradingWith.avatar} />
          </div>
          <div>
            <span styleName='reputation-positive'>+{tradingWith.positiveReputation}</span>
            <span>/</span>
            <span styleName='reputation-negative'>-{tradingWith.negativeReputation}</span>
          </div>
        </div>
        <div styleName='block'>
          <div styleName='block-title'>
            # of trades
          </div>
          <div styleName='block-user-trades-counter'>
            {tradingWith.tradesCounter}
          </div>
        </div>
        <div styleName='block'>
          <div styleName='block-title'>
            Trade status
          </div>
          <div styleName={`block-status-value-${paidStatus ? 'paid' : 'not-paid'}`}>
            {paidStatus ? 'Paid' : 'Not paid'}
          </div>
        </div>
        <div styleName='block'>
          <div styleName='block-title'>
            Trade hash
          </div>
          <div styleName='block-hash-value'>
            {hash}
          </div>
        </div>
        <div styleName='block'>
          <div styleName='block-title'>
            Amount {currency}
          </div>
          <div styleName='block-amount-currency-value'>
            {currencyAmount}
          </div>
        </div>
        <div styleName='block'>
          <div styleName='block-title'>
            Amount {cryptocurrency}
          </div>
          <div styleName='block-amount-cryptocurrency-value'>
            {cryptocurrencyAmount}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TradePanel
