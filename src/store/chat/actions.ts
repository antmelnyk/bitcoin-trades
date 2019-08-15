import { Dispatch, ActionCreator } from 'redux';

import {
  FetchChatAction,
  FetchChatActionCreator,
  SendMessageAction,
  SendMessageActionCreator,
  UpdateChatAction,
  FETCH_CHAT,
  SEND_MESSAGE,
  UPDATE_CHAT
} from './types';

import API from '../../services/api/api';

// Ideally in the real app for a chat we would establish websocket connection
// using something like redux-websocket or something else depending on the backend. 
// Thus chat interaction could be different.
// For now though we do all operations locally.

export const fetchChat: ActionCreator<FetchChatActionCreator> = (chatId: number) => {
  return async (dispatch: Dispatch) => {

    const fetchChat: FetchChatAction = {
      type: FETCH_CHAT,
      chatId
    };
    dispatch(fetchChat);

    const chat = await API.fetchChat(chatId);

    const updateChat: UpdateChatAction = {
      type: UPDATE_CHAT,
      messages: chat.messages
    };
    return dispatch(updateChat);

  }
}

export const sendMessage: ActionCreator<SendMessageActionCreator> = (message: string, authorId: number) => {
  return async (dispatch: Dispatch) => {

    const sendMessage: SendMessageAction = {
      type: SEND_MESSAGE,
      message,
      authorId
    };

    return dispatch(sendMessage);

  }
}
