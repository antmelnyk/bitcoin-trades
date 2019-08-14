import { ThunkAction } from 'redux-thunk';
import { User } from '../users/types';
import { ApplicationState } from '../configureStore';

// Actions types
export const FETCH_TRADES = 'FETCH_TRADES'
export const FETCH_TRADE = 'FETCH_TRADE'
export const UPDATE_ACTIVE_TRADE = 'UPDATE_ACTIVE_TRADE'
export const UPDATE_TRADES = 'UPDATE_TRADES'
export const DELETE_TRADE = 'DELETE_TRADE'
export const RELEASE_BITCOIN = 'RELEASE_BITCOIN'

export interface FetchTradesAction {
  type: typeof FETCH_TRADES
}

export interface FetchTradeAction {
  type: typeof FETCH_TRADE
}

export interface UpdateActiveTradeAction {
  type: typeof UPDATE_ACTIVE_TRADE,
  activeTrade: Trade | false
}

export interface UpdateTradesAction {
  type: typeof UPDATE_TRADES,
  trades: Trade[]
}

export interface DeleteTradeAction {
  type: typeof DELETE_TRADE,
  hash: string
}

export interface ReleaseBitcoinAction {
  type: typeof RELEASE_BITCOIN,
  tradeHash: number
}

export type TradesActionTypes =
  FetchTradesAction |
  FetchTradeAction |
  UpdateActiveTradeAction |
  UpdateTradesAction |
  DeleteTradeAction |
  ReleaseBitcoinAction;

// Action creators types
export type FetchTradesActionCreator = ThunkAction<Promise<UpdateTradesAction>, ApplicationState, null, UpdateTradesAction>
export type FetchTradeActionCreator = ThunkAction<Promise<UpdateActiveTradeAction>, ApplicationState, null, UpdateActiveTradeAction>
export type DeleteTradeActionCreator = ThunkAction<Promise<DeleteTradeAction>, ApplicationState, string, DeleteTradeAction>
export type ReleaseBitcoinActionCreator = ThunkAction<Promise<ReleaseBitcoinAction>, ApplicationState, null, ReleaseBitcoinAction>

// State types
export interface TradesState {
  isFetching: boolean;
  list: Trade[];
  activeTrade: Trade | null | false;
}

export interface Trade {
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
