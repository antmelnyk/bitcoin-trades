import { Dispatch, ActionCreator } from 'redux';

import { 
  FetchTradesAction,
  UpdateTradesAction,
  FetchTradesActionCreator,
  ReleaseBitcoinAction,
  ReleaseBitcoinActionCreator,
  FETCH_TRADES,
  UPDATE_TRADES,
  RELEASE_BITCOIN
} from './types';

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

export const releaseBitcoin: ActionCreator<ReleaseBitcoinActionCreator> = (tradeId: number) => {
  return async (dispatch: Dispatch) => {

    const releaseBitcoin: ReleaseBitcoinAction = {
      type: RELEASE_BITCOIN,
      tradeId
    };
    
    return dispatch(releaseBitcoin);
    
  };
}
