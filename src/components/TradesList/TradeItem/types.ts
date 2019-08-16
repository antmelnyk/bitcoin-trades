import { Trade } from '../../../store/trades/types';


export interface IOwnProps {
  trade: Trade;
}

export interface IStateProps {
  unreadTradeChats: number[];
}

export type IProps = IStateProps & IOwnProps
