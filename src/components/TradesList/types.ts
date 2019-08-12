import { Trade, UpdateTradesAction } from '../../store/trades/types';
import { RouteComponentProps } from 'react-router-dom';

export interface IStateProps {
  list: Trade[];
  isFetching: boolean;
}

export interface IDispatchProps {
  fetchTrades: () => Promise<UpdateTradesAction>
}

// export interface IRouterProps {
// }

// export type IProps = IStateProps & IDispatchProps & RouteComponentProps<IRouterProps> 

export type IProps = IStateProps & IDispatchProps
