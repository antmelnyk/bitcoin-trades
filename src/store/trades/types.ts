import { User } from '../activeUser/types';

// Action types
export const FETCH_TRADES = 'FETCH_TRADES'
export const UPDATE_TRADES = 'UPDATE_TRADES'
export const CHECK_TRADE_CHAT = 'CHECK_TRADE_CHAT'
export const RELEASE_BITCOIN = 'RELEASE_BITCOIN'

export interface FetchTradesAction {
  type: typeof FETCH_TRADES
}

export interface UpdateTradesAction {
  type: typeof UPDATE_TRADES,
  trades: Trade[]
}

export interface ReleaseBitcoinAction {
  type: typeof RELEASE_BITCOIN,
  tradeId: number
}

export type TradesActionTypes =
  FetchTradesAction |
  UpdateTradesAction |
  ReleaseBitcoinAction;

// State types
export interface TradesState {
  isFetching: boolean;
  activeTradeId: number | null;
  list: Trade[];
  input: string
}

export interface Trade {
  id: number;
  tradingWith: User;
  paymentMethodId: number;
  paidStatus: boolean;
  currencyId: number;
  amountCurrency: number;
  amountBitcoin: number;
  chatId: number;
  createdAt: Date;
  hash: string;
}

export interface PaymentMethod {
  id: number;
  name: string;
}

export interface Currency {
  id: number;
  name: string;
}
