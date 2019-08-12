import { Trade } from '../../store/trades/types';

export const tradesData: Trade[] = [
  {
    id: 0,
    tradingWith: {
      id: 213,
      login: 'Chanaar',
      positiveReputation: 23,
      negativeReputation: 1,
      tradesCounter: 1,
      avatar: ''
    },
    paymentMethod: 'Steam Gift Card',
    paidStatus: false,
    tradeStatus: 'is buying',
    currency: 'USD',
    currencyAmount: 25,
    cryptocurrency: 'BTC',
    cryptocurrencyAmount: 0.00234,
    chatId: 0,
    chatNotification: true,
    createdAt: new Date(),
    hash: '138f211a423d57ce71665e2e024fc9a5'
  },
  {
    id: 1,
    tradingWith: {
      id: 232,
      login: 'Robert',
      positiveReputation: 45,
      negativeReputation: 2,
      tradesCounter: 3,
      avatar: ''
    },
    paymentMethod: 'Amazon Gift Card',
    paidStatus: true,
    tradeStatus: 'is buying',
    currency: 'USD',
    currencyAmount: 15,
    cryptocurrency: 'BTC',
    cryptocurrencyAmount: 0.00094,
    chatId: 1,
    chatNotification: false,
    createdAt: new Date(),
    hash: '231df2wefw3df23rd3'
  }
]