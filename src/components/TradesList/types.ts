import { ActionCreator } from 'redux';
import { Trade, FetchTradesActionCreator } from '../../store/trades/types';

export interface IStateProps {
  list: Trade[];
  isFetching: boolean;
}

export interface IDispatchProps {
  actions: {
    fetchTrades: ActionCreator<FetchTradesActionCreator>
  }
}

export type IProps = IStateProps & IDispatchProps
