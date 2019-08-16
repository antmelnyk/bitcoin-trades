import { Dispatch, ActionCreator } from 'redux';

import {
  ReadChatAction,
  ReadChatActionCreator,
  UpdateUnreadChatsActionCreator,
  UpdateUnreadChatsAction,
  READ_CHAT,
  UPDATE_UNREAD_CHATS
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
