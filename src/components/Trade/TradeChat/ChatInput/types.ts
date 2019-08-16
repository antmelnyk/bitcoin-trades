import { ActionCreator } from 'redux';
import { SendMessageActionCreator } from '../../../../store/chat/types';

export interface IOwnProps {
}

export interface IStateProps {
  activeUserId: number | null;
  tradingWithId: number | null;
}

export interface IDispatchProps {
  actions: {
    sendMessage: ActionCreator<SendMessageActionCreator>,
  }
}

export type IProps = IStateProps & IDispatchProps & IOwnProps
