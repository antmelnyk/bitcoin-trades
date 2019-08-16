import { ActionCreator } from 'redux';
import { Message, FetchChatActionCreator } from '../../../store/chat/types';
import { Trade, DeleteTradeActionCreator } from '../../../store/trades/types';
import { ReadChatActionCreator } from '../../../store/users/types';

export interface IOwnProps {
  trade: Trade;
}

export interface IStateProps {
  messages: Message[];
  isFetching: boolean;
}

export interface IDispatchProps {
  actions: {
    deleteTrade: ActionCreator<DeleteTradeActionCreator>,
    fetchChat: ActionCreator<FetchChatActionCreator>,
    readChat: ActionCreator<ReadChatActionCreator>,
  }
}

export type IProps = IStateProps & IDispatchProps & IOwnProps
