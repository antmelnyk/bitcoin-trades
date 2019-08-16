import { Trade } from '../../store/trades/types';
import { Message } from '../../store/chat/types';
import { tradesData, chatData } from './data';

/**
 * Mocking calls to backend API
 */
export default class API {
  static requestTime: number = 1000;

  static async fetchTrades() : Promise<Trade[]> {

    const data = await http('https://api.coindesk.com/v1/bpi/currentprice/USD.json');
    
    return new Promise(resolve => {
      tradesData.forEach(async (trade, index, array) => { 
        array[index].cryptocurrencyAmount = array[index].currencyAmount / data.bpi.USD.rate_float
      })
      
      setTimeout(() => {
        resolve(tradesData)
      }, this.requestTime);
    })
  }

  static fetchTrade(hash: string): Promise<Trade> {
    return new Promise(resolve => {
      setTimeout(() => { resolve(tradesData.find(trade => trade.hash == hash)) }, this.requestTime);
    })
  }

  static fetchChat(id: number): Promise<{ id: number, messages: Message[], activeUser: { id: number; avatar: string; }, tradingWith: { id: number; avatar: string; }}> {
    return new Promise(resolve => {
      setTimeout(() => { resolve(chatData.find(chat => chat.id == id)) }, this.requestTime);
    })
  } 
}

const http = async (request: RequestInfo): Promise<any> => {
  return new Promise(resolve => {
    fetch(request)
      .then(response => response.json())
      .then(body => {
        resolve(body);
      });
  });
};
