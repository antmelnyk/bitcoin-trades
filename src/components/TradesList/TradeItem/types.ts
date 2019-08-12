import { Trade } from '../../../store/trades/types';

export interface IStateProps {
  trade: Trade;
}

export interface IDispatchProps {
}

export type IProps = IStateProps & IDispatchProps
