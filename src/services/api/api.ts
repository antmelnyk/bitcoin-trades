import { Trade } from '../../store/trades/types';

/**
 * Mocking calls to backend API
 */
export default class API {
  static requestTime: number = 1500;

  static fetchTrades() : Promise<Trade[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
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
            paymentMethodId: 0,
            paidStatus: false,
            currencyId: 0,
            amountCurrency: 25.0,
            amountBitcoin: 0.00234,
            chatId: 0,
            createdAt: new Date(),
            hash: '138f211a423d57ce71665e2e024fc9a5'
          },
          {
            id: 0,
            tradingWith: {
              id: 213,
              login: 'Robert',
              positiveReputation: 45,
              negativeReputation: 3,
              tradesCounter: 5,
              avatar: ''
            },
            paymentMethodId: 0,
            paidStatus: true,
            currencyId: 0,
            amountCurrency: 25.0,
            amountBitcoin: 0.00234,
            chatId: 0,
            createdAt: new Date(),
            hash: '138f211a423d57ce71665e2e024fc9a5'
          }
        ])
      }, this.requestTime);
    })
  }

}
