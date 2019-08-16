import { Dispatch, ActionCreator } from 'redux';

import {
  ReadChatAction,
  ReadChatActionCreator,
  READ_CHAT
} from './types';

export const readChat: ActionCreator<ReadChatActionCreator> = (chatId: number) => {
  return async (dispatch: Dispatch) => {

    const readChat: ReadChatAction = {
      type: READ_CHAT,
      chatId
    };

    return dispatch(readChat);

  }
}