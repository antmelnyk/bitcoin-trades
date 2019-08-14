import { ActionCreator } from 'redux';
import { Message } from '../../../store/chat/types';
import { User } from '../../../store/users/types';
import { DeleteTradeActionCreator } from '../../../store/trades/types';

export interface IOwnProps {
  paymentMethod: string;
  tradingWith: User;
}

export interface IStateProps {
  isFetching: boolean;
  messages: Message[];
}

export interface IDispatchProps {
  actions: {
    deleteTrade: ActionCreator<DeleteTradeActionCreator>
  }
}

export type IProps = IStateProps & IDispatchProps & IOwnProps
