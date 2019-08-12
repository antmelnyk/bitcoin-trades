import { Trade } from '../../store/trades/types';
import { tradesData } from './data';

/**
 * Mocking calls to backend API
 */
export default class API {
  static requestTime: number = 1500;

  static fetchTrades() : Promise<Trade[]> {
    console.log('here');
    
    return new Promise(resolve => {
      setTimeout(() => { resolve(tradesData) }, this.requestTime);
    })
  }

}
