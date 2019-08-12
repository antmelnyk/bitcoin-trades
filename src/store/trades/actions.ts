import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { 
  FetchTradesAction,
  UpdateTradesAction,
  ReleaseBitcoinAction,
  FETCH_TRADES,
  UPDATE_TRADES,
  RELEASE_BITCOIN,
  Trade
} from './types';

import API from '../../services/api/api';

export const fetchTrades: ActionCreator<
  ThunkAction<
    Promise<UpdateTradesAction>,
    Trade[],
    null,
    UpdateTradesAction
  >
> = () => {
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

export const releaseBitcoin: ActionCreator<
  ThunkAction<
    Promise<ReleaseBitcoinAction>,
    null,
    null,
    ReleaseBitcoinAction
  >
> = (tradeId: number) => {
  return async (dispatch: Dispatch) => {

    const releaseBitcoin: ReleaseBitcoinAction = {
      type: RELEASE_BITCOIN,
      tradeId
    };
    
    return dispatch(releaseBitcoin);
    
  };
}
