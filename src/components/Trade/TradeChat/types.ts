import { ActionCreator } from 'redux';
import { Message, FetchChatActionCreator } from '../../../store/chat/types';
import { Trade, DeleteTradeActionCreator } from '../../../store/trades/types';

export interface IOwnProps {
  trade: Trade;
}

export interface IStateProps {
  messages: Message[];
}

export interface IDispatchProps {
  actions: {
    deleteTrade: ActionCreator<DeleteTradeActionCreator>,
    fetchChat: ActionCreator<FetchChatActionCreator>
  }
}

export type IProps = IStateProps & IDispatchProps & IOwnProps
