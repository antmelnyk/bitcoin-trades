import { ActionCreator } from 'redux';
import { RouteComponentProps } from 'react-router-dom';
import { Trade, FetchTradeActionCreator } from '../../store/trades/types';

export interface IStateProps {
  trade: Trade | null | false;
}

export interface IDispatchProps {
  actions: {
    fetchTrade: ActionCreator<FetchTradeActionCreator>
  }
}

export interface IRouterProps {
  tradeHash: string
}

export type IProps = IStateProps & IDispatchProps & RouteComponentProps<IRouterProps>

