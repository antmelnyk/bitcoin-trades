import { ThunkAction } from 'redux-thunk';
import { User } from '../users/types';
import { ApplicationState } from '../configureStore';

// Actions types
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

// Action creators types
export type FetchTradesActionCreator = ThunkAction<Promise<UpdateTradesAction>, ApplicationState, null, UpdateTradesAction>
export type ReleaseBitcoinActionCreator = ThunkAction<Promise<ReleaseBitcoinAction>, ApplicationState, null, ReleaseBitcoinAction>

// State types
export interface TradesState {
  isFetching: boolean;
  activeTradeId: number | null;
  list: Trade[] | [];
  input: string
}

export interface Trade {
  id: number;
  tradingWith: User;
  paymentMethod: string;
  paidStatus: boolean;
  tradeStatus: string
  currency: string;
  currencyAmount: number;
  cryptocurrency: string;
  cryptocurrencyAmount: number;
  chatId: number;
  chatNotification: boolean;
  createdAt: Date;
  hash: string;
}
