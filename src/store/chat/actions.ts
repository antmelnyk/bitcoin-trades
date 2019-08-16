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

import { UpdateUnreadChatsAction, UPDATE_UNREAD_CHATS } from '../users/types';

import API from '../../services/api/api';
import { ApplicationState } from '../configureStore';

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
      id: chatId,
      messages: chat.messages,
      activeUser: chat.activeUser,
      tradingWith: chat.tradingWith
    };
    return dispatch(updateChat);

  }
}

export const sendMessage: ActionCreator<SendMessageActionCreator> = (message: string, authorId: number) => {
  return async (dispatch: Dispatch, getState: () => ApplicationState) => {
    
    const chatId = getState().chat.id;
    const activeUser = getState().activeUser;
    
    // Update notifications only if message is not from active user
    if (chatId != null && activeUser && activeUser.id != authorId) {
      const updateUnreadChats: UpdateUnreadChatsAction = {
        type: UPDATE_UNREAD_CHATS,
        chatId
      };
      dispatch(updateUnreadChats);
    }

    const sendMessage: SendMessageAction = {
      type: SEND_MESSAGE,
      message,
      authorId
    };
    return dispatch(sendMessage);

  }
}
