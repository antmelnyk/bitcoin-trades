import { Dispatch, ActionCreator } from 'redux';

import { 
  FetchTradesAction,
  UpdateTradesAction,
  FetchTradesActionCreator,
  FetchTradeAction,
  UpdateActiveTradeAction,
  FetchTradeActionCreator,
  DeleteTradeAction,
  DeleteTradeActionCreator,
  ReleaseBitcoinAction,
  ReleaseBitcoinActionCreator,
  FETCH_TRADES,
  FETCH_TRADE,
  UPDATE_TRADES,
  UPDATE_ACTIVE_TRADE,
  DELETE_TRADE,
  RELEASE_BITCOIN
} from './types';

import {
  ClearChatAction,
  ClearChatActionCreator,
  CLEAR_CHAT
} from '../chat/types';

import API from '../../services/api/api';

export const fetchTrades: ActionCreator<FetchTradesActionCreator> = () => {
  return async (dispatch: Dispatch) => {

    const fetchTrades: FetchTradesAction = {
      type: FETCH_TRADES
    };
    dispatch(fetchTrades);

    const trades = await API.fetchTrades();

    const updateTrades: UpdateTradesAction = {
      type: UPDATE_TRADES,
      trades
    };
    return dispatch(updateTrades);

  }
}


export const fetchTrade: ActionCreator<FetchTradeActionCreator> = (hash: string) => {
  return async (dispatch: Dispatch) => {
    
    const clearChat: ClearChatAction = {
      type: CLEAR_CHAT
    };
    dispatch(clearChat);
    
    const fetchTrade: FetchTradeAction = {
      type: FETCH_TRADE
    };
    dispatch(fetchTrade);

    const activeTrade = await API.fetchTrade(hash);

    const updateActiveTrade: UpdateActiveTradeAction = {
      type: UPDATE_ACTIVE_TRADE,
      activeTrade: activeTrade ? activeTrade : false
    };
    return dispatch(updateActiveTrade);

  }
}


export const deleteTrade: ActionCreator<DeleteTradeActionCreator> = (hash: string) => {
  return async (dispatch: Dispatch) => {

    const deleteTrade: DeleteTradeAction = {
      type: DELETE_TRADE,
      hash
    };
    return dispatch(deleteTrade);

  }
}

export const releaseBitcoin: ActionCreator<ReleaseBitcoinActionCreator> = (tradeHash: number) => {
  return async (dispatch: Dispatch) => {

    const releaseBitcoin: ReleaseBitcoinAction = {
      type: RELEASE_BITCOIN,
      tradeHash
    };
    return dispatch(releaseBitcoin);
    
  };
}
