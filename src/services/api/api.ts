import { Trade } from '../../store/trades/types';
import { tradesData } from './data';

/**
 * Mocking calls to backend API
 */
export default class API {
  static requestTime: number = 400;

  static fetchTrades() : Promise<Trade[]> {    
    return new Promise(resolve => {
      setTimeout(() => { resolve(tradesData) }, this.requestTime);
    })
  }

  static fetchTrade(hash: string): Promise<Trade> {
    return new Promise(resolve => {
      setTimeout(() => { resolve(tradesData.find(trade => trade.hash == hash)) }, this.requestTime);
    })
  }

}
