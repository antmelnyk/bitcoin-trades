import { ActionCreator } from 'redux';
import { Trade, ReleaseBitcoinActionCreator } from '../../../store/trades/types';

export interface IOwnProps {
  trade: Trade
}

export interface IDispatchProps {
  actions: {
    releaseBitcoin: ActionCreator<ReleaseBitcoinActionCreator>
  }
}

export type IProps = IDispatchProps & IOwnProps
